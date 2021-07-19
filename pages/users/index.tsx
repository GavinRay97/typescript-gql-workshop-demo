// import Link from "next/link"

// import {
//   useTypedSubscription,
//   useTypedMutation,
//   useTypedQuery,
// } from "../../utils/gql-zeus-hooks"

// import { $, ValueTypes, ZeusSelect } from "../../utils/generated/graphql-zeus"

// export default function AllUsersPage() {

//   const query = useTypedQuery({
//     user: [
//       {},
//       {
//         id: true,
//         email: true,
//         todos: [{}, todoDescriptionAndIsCompletedFragment],
//       },
//     ],
//   })

//   const [deleteUserByPk] = useTypedMutation({
//     delete_user_by_pk: [
//       {
//         id: $`id`,
//       },
//       {
//         id: true,
//       },
//     ],
//   })

//   if (query.loading) return <p>Loading...</p>
//   if (query.error) return <p>Error</p>

//   return (
//     <div>
//       <h2>Users:</h2>
//       <hr />
//       <ul>
//         {query.data.user.map((user) => (
//           <li key={user.id} style={{ paddingBottom: 10 }}>
//             ID: {user.id}, Email: {user.email}
//             <ul>
//               <li>
//                 <Link href={`/users/${user.id}`}>View</Link> 👀
//               </li>
//               <li
//                 onClick={() => deleteUserByPk({ variables: { id: user.id } })}
//               >
//                 Delete <p style={{ color: "red", display: "inline" }}>✗</p>
//               </li>
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
