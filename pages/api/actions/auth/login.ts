import bcrypt from "bcryptjs"
import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"

import { client } from "../../../../utils/gql-client"
import { generateJWT } from "../../../../utils/auth/jwt"

const handler = nc<NextApiRequest, NextApiResponse>()

handler.post(async (req, res) => {
  try {
    console.log("Login called with body:", req.body)

    // Get input from Hasura Action query variables payload
    const { username, password } = req.body.input.params
    const data = await client.query({
      user: [
        {
          where: {
            username: { _eq: username },
          },
        },
        {
          id: true,
          password: true,
        },
      ],
    })

    const user = data.user[0]
    if (!user) return res.status(401).json({ message: "Invalid" })

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(401).send({ message: "Invalid" })

    const token = generateJWT({
      defaultRole: "user",
      allowedRoles: ["user"],
      otherClaims: {
        "X-Hasura-User-Id": user.id.toString(),
      },
    })

    return res.json({ token })
  } catch (e) {
    console.log("Got error at /api/actions/login", e)
    return res.status(400).json({ code: e.name, message: e.message })
  }
})

export const config = {
  api: {
    bodyParser: true,
  },
}

export default handler
