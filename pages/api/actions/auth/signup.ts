import bcrypt from "bcryptjs"
import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"

import { client } from "../../../../utils/gql-client"
import { generateJWT } from "../../../../utils/auth/jwt"

const handler = nc<NextApiRequest, NextApiResponse>()

const checkMessage = (message) => (arr: any[]) =>
  arr?.some((error) => error.message.includes(message))

const notUnique = checkMessage("Uniqueness violation")

handler.post<NextApiRequest, NextApiResponse>(async (req, res) => {
  try {
    console.log("Signup called with body:", req.body)
    const { username, password } = req.body.input.params

    const data = await client.mutation({
      insert_user_one: [
        {
          object: {
            username,
            password: await bcrypt.hash(password, 10),
          },
        },
        {
          id: true,
          username: true,
        },
      ],
    })

    const user = data.insert_user_one
    console.log({ data })
    if (!user) return res.status(400).json({ message: "Something went wrong" })

    const token = generateJWT({
      defaultRole: "user",
      allowedRoles: ["user"],
      otherClaims: {
        "X-Hasura-User-Id": user.id.toString(),
      },
    })

    return res.json({ token })
  } catch (e) {
    console.log("GOT ERROR:", e)
    if (notUnique(e.response.errors)) {
      return res.status(400).json({ message: "Not Permitted" })
    } else {
      console.log("Got error at /api/actions/signup", e)
      return res.status(400).json({ code: e.name, message: e.message })
    }
  }
})

export const config = {
  api: {
    bodyParser: true,
  },
}

export default handler
