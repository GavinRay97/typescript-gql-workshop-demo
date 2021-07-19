import Link from "next/link"

import {
  useTypedSubscription,
  useTypedMutation,
  useTypedQuery,
} from "../../utils/gql-zeus-hooks"

import { $ } from "../../utils/generated/zeus/index"
import { useRef } from "react"

export default function AllTodosPage() {
  const addUserForm = useRef(null)

  const { data, loading, error } = useTypedSubscription({
    todo: [
      {},
      {
        id: true,
        description: true,
        is_completed: true,
        user_todos: [
          {},
          {
            user: {
              id: true,
              username: true,
            },
          },
        ],
      },
    ],
  })

  const [removeUserFromUserTodo] = useTypedMutation({
    delete_user_todo_by_pk: [
      {
        user_id: $`user_id`,
        todo_id: $`todo_id`,
      },
      {
        user_id: true,
        todo_id: true,
      },
    ],
  })

  const [updateTodoByPk] = useTypedMutation({
    update_todo_by_pk: [
      {
        pk_columns: { id: $`id` },
        _set: {
          is_completed: $`is_completed`,
        },
      },
      {
        id: true,
        is_completed: true,
      },
    ],
  })

  const [addUserToTodoMutation] = useTypedMutation({
    insert_user_todo_one: [
      {
        object: {
          todo_id: $`todo_id`,
          user_id: $`user_id`,
        },
      },
      {
        todo_id: true,
        user_id: true,
      },
    ],
  })

  function onAddUserFormSubmit(e, todo_id) {
    e.preventDefault()
    const data = new FormData(addUserForm.current)
    addUserToTodoMutation({
      variables: {
        todo_id,
        user_id: Number(data.get("newUserIdInput")),
      },
    })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div>
      <h2>Todos:</h2>
      <hr />
      <ul>
        {data.todo.map((todo) => (
          <li key={Number(todo.id)} style={{ paddingBottom: 10 }}>
            {/* Description, is_completed checkbox */}
            <input
              id={"todo" + todo.id}
              type="checkbox"
              checked={todo.is_completed}
              onChange={(e) =>
                updateTodoByPk({
                  variables: {
                    id: todo.id,
                    is_completed: e.target.checked,
                  },
                })
              }
            />
            <label htmlFor={"todo" + todo.id}>{todo.description}</label>

            <br />
            <form
              ref={addUserForm}
              onSubmit={(e) => onAddUserFormSubmit(e, todo.id)}
            >
              <label htmlFor="newUserIdInput">
                Add new user by ID to Todo:
              </label>
              <input name="newUserIdInput" type="number" />
              <button type="submit">+</button>
            </form>

            {/* Todo's user list*/}
            <p>Users:</p>
            <ul>
              {todo.user_todos.map((userTodo) => (
                <>
                  <li>
                    <p>
                      ID: {userTodo.user.id} | Username:{" "}
                      {userTodo.user.username}
                    </p>
                  </li>
                  <ul>
                    <li>
                      <Link href={`/users/${userTodo.user.id}`}>View</Link> 👀
                    </li>
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        removeUserFromUserTodo({
                          variables: {
                            todo_id: todo.id,
                            user_id: userTodo.user.id,
                          },
                        })
                      }
                    >
                      <p>
                        Remove From Todo{" "}
                        <text style={{ color: "red", display: "inline" }}>
                          ✗
                        </text>
                      </p>
                    </li>
                  </ul>
                </>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
