// import { useRouter } from "next/router"

// import { $ } from "../../../utils/generated/graphql-zeus"
// import {
//   useTypedQuery,
//   useTypedMutation,
//   useTypedSubscription,
// } from "../../../utils/gql-zeus-hooks"
// import { useState } from "react"

// export default function UserById() {
//   const router = useRouter()
//   const [newUserEmail, setNewUserEmail] = useState("")
//   const [newTodoDescription, setNewTodoDescription] = useState("")

//   const usersQuery = useTypedQuery({
//     user_by_pk: [
//       {
//         id: Number(router.query.id),
//       },
//       {
//         id: true,
//         email: true,
//       },
//     ],
//   })

//   const [updateUserByPk] = useTypedMutation({
//     update_user_by_pk: [
//       {
//         pk_columns: { id: Number(router.query.id) },
//         _set: {
//           email: $`email`,
//         },
//       },
//       {
//         id: true,
//       },
//     ],
//   })

//   const todosQuery = useTypedQuery({
//     todo: [
//       {
//         where: {
//           user_id: { _eq: Number(router.query.id) },
//         },
//       },
//       {
//         id: true,
//         user_id: true,
//         description: true,
//         is_completed: true,
//       },
//     ],
//   })

//   const [insertTodo] = useTypedMutation({
//     insert_todo_one: [
//       {
//         object: {
//           user_id: Number(router.query.id),
//           description: $`description`,
//         },
//       },
//       {
//         id: true,
//         user_id: true,
//         description: true,
//         is_completed: true,
//       },
//     ],
//   })

//   const [updateTodoByPk] = useTypedMutation({
//     update_todo_by_pk: [
//       {
//         pk_columns: { id: $`id` },
//         _set: {
//           is_completed: $`is_completed`,
//         },
//       },
//       {
//         id: true,
//         is_completed: true,
//       },
//     ],
//   })

//   if (usersQuery.loading) return <p>Loading...</p>
//   if (usersQuery.error) return <p>Error</p>

//   if (todosQuery.loading) return <p>Loading...</p>
//   if (todosQuery.error) return <p>Error</p>

//   return (
//     <div>
//       <h2>User {router.query.id}</h2>
//       <hr />

//       <label htmlFor="email">Email: </label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={(e) => setNewUserEmail(e.target.value)}
//         placeholder={usersQuery.data.user_by_pk.email}
//       />
//       <br />
//       <br />
//       <button
//         onClick={() => updateUserByPk({ variables: { email: newUserEmail } })}
//       >
//         Update
//       </button>

//       <h2>Todos</h2>
//       <hr />
//       {todosQuery.data.todo.map((todo) => (
//         <div key={todo.id}>
//           <input
//             id={"todo" + todo.id}
//             type="checkbox"
//             checked={todo.is_completed}
//             onChange={(e) =>
//               updateTodoByPk({
//                 variables: {
//                   id: todo.id,
//                   is_completed: e.target.checked,
//                 },
//               })
//             }
//           />
//           <label htmlFor={"todo" + todo.id}>{todo.description}</label>
//           <br />
//         </div>
//       ))}

//       <p>Add a new todo:</p>
//       <input
//         type="text"
//         placeholder="description"
//         onChange={(e) => setNewTodoDescription(e.target.value)}
//       />
//       <button
//         onClick={() =>
//           insertTodo({
//             variables: {
//               description: newTodoDescription,
//             },
//           })
//         }
//       >
//         +
//       </button>
//     </div>
//   )
// }
