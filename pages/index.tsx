import Link from "next/link"

import AppLayout from "../components/AppLayout"

import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid"

import { IndigoButton } from "./IndigoButton"

import { useTypedMutation, useTypedSubscription } from "../utils/gql-zeus-hooks"
import { todo, $, user } from "../utils/generated/graphql-zeus"

type SlideOverMode = "CREATE" | "EDIT"

interface SlideOverProps {
  currentlyEdittedTodo: todo
  setCurrentlyEdittedTodo: React.Dispatch<React.SetStateAction<todo>>
  mode: SlideOverMode
  isOpen: boolean
  setSlideOverIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleSaveButtonClick: () => void
  handleCreateButtonClick: () => void
  handleOnUserAddedToTodo: (todoId: number, userId: number) => void
  handleOnUserRemovedFromTodo: (todoId: number, userId: number) => void
}

function TodoEditorSidePanel(props: SlideOverProps) {
  const [isAddingUsers, setIsAddingUsers] = useState(false)
  const [newUserId, setNewUserId] = useState(0)

  const content: Record<SlideOverMode, Record<string, string>> = {
    CREATE: {
      title: "Create Todo",
      subtitle:
        "Get started by filling in the information below to create your new todo",
    },
    EDIT: {
      title: "Edit Todo",
      subtitle: "Use the form below to modify your todo",
    },
  }

  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={props.isOpen}
        onClose={() => props.setSlideOverIsOpen(false)}
      >
        <div className="absolute inset-0 z-20 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-lg">
                <form className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="px-4 py-6 bg-gray-50 sm:px-6">
                      <div className="flex items-start justify-between space-x-3">
                        <div className="space-y-1">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            {content[props.mode].title}
                          </Dialog.Title>
                          <p className="text-sm text-gray-500">
                            {content[props.mode].subtitle}
                          </p>
                        </div>
                        <div className="flex items-center h-7">
                          <button
                            type="button"
                            className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => {
                              props.setSlideOverIsOpen(false)
                            }}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Divider container */}
                    <div className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                      {/* Project name */}
                      <div className="px-4 space-y-1 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                          <label
                            htmlFor="project-name"
                            className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                          >
                            Description
                          </label>
                        </div>
                        <div className="sm:col-span-2">
                          <input
                            type="text"
                            name="project-name"
                            id="project-name"
                            className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={props.currentlyEdittedTodo.description}
                            onInput={(e) =>
                              props.setCurrentlyEdittedTodo({
                                ...props.currentlyEdittedTodo,
                                description: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      {/* Completion Status */}
                      <div className="px-4 space-y-1 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                          <label
                            htmlFor="is-completed"
                            className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                          >
                            Completed
                          </label>
                        </div>
                        <div className="flex items-end sm:col-span-2">
                          <input
                            type="checkbox"
                            name="is-completed"
                            id="is-completed"
                            className="block border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                            checked={props.currentlyEdittedTodo.is_completed}
                            onChange={(e) =>
                              props.setCurrentlyEdittedTodo({
                                ...props.currentlyEdittedTodo,
                                is_completed: e.target.checked,
                              })
                            }
                          />
                        </div>
                      </div>

                      {/* Team members */}
                      <div className="px-4 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:px-6 sm:py-5">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Assigned To
                          </h3>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex space-x-2">
                            {props.currentlyEdittedTodo.user_todos?.map(
                              (userTodo) => (
                                <a
                                  key={
                                    userTodo.todo_id + "-" + userTodo.user_id
                                  }
                                  href="#"
                                  className="flex-shrink-0 rounded-full hover:opacity-75"
                                  onClick={() => {
                                    props.handleOnUserRemovedFromTodo(
                                      userTodo.todo_id,
                                      userTodo.user_id,
                                    )
                                  }}
                                >
                                  <img
                                    className="inline-block w-8 h-8 rounded-full"
                                    src={`https://ui-avatars.com/api/?background=random&name=${userTodo.user.username}`}
                                  />
                                </a>
                              ),
                            )}
                            <button
                              type="button"
                              className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 bg-white border-2 border-gray-200 border-dashed rounded-full hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => {
                                setIsAddingUsers(true)
                              }}
                            >
                              <span className="sr-only">Add team member</span>
                              <PlusIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Add Users to Todo */}
                      {isAddingUsers && (
                        <div className="px-4 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlFor="is-completed"
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              Add Users
                            </label>
                          </div>
                          <div className="flex items-end sm:col-span-2">
                            <input
                              type="number"
                              name="user-id-input"
                              id="user-id-input"
                              className="block border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                              onChange={(e) =>
                                setNewUserId(Number(e.target.value))
                              }
                            />
                          </div>
                          <section>
                            <button
                              type="button"
                              className="w-10 px-4 py-2 m-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => {
                                setIsAddingUsers(false)
                              }}
                            >
                              X
                            </button>
                            <button
                              type="button"
                              className="px-4 py-2 m-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-14 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => {
                                props.handleOnUserAddedToTodo(
                                  props.currentlyEdittedTodo.id,
                                  newUserId,
                                )
                              }}
                            >
                              Add
                            </button>
                          </section>
                        </div>
                      )}
                      {/* End Add Users to Todo */}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex-shrink-0 px-4 py-5 border-t border-gray-200 sm:px-6">
                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                          props.setSlideOverIsOpen(false)
                        }}
                      >
                        Cancel
                      </button>

                      {props.mode == "CREATE" ? (
                        <button
                          type="submit"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={(e) => {
                            e.preventDefault()
                            props.handleCreateButtonClick()
                          }}
                        >
                          Create
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={(e) => {
                            e.preventDefault()
                            props.handleSaveButtonClick()
                          }}
                        >
                          Save
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

interface TableProps {
  data: ReturnType<typeof useTodosSubscription>["data"]
  handleEditButtonClick: (todo: todo) => void
  handleDeleteButtonClick: (todo: todo) => void
}

function TodoTable(props: TableProps) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Assigned To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Status
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.data?.todo.map((todo) => (
                  <tr key={todo.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {todo.user_todos?.length == 0 && (
                          <button
                            type="button"
                            className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 bg-white border-2 border-gray-200 border-dashed rounded-full hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <span className="sr-only">Add team member</span>
                            <PlusIcon className="w-5 h-5" aria-hidden="true" />
                          </button>
                        )}
                        {todo.user_todos.map((userTodos) => (
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={`https://ui-avatars.com/api/?background=random&name=${userTodos.user.username}`}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {todo.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {todo.is_completed ? (
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-yellow-500 bg-yellow-100 rounded-full">
                          In Progress
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => {
                          props.handleEditButtonClick(todo as todo)
                        }}
                      >
                        Edit
                      </a>

                      <br />

                      <a
                        href="#"
                        className="text-red-600 hover:text-red-900"
                        onClick={() =>
                          props.handleDeleteButtonClick(todo as todo)
                        }
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal(props: ModalProps) {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => props.setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent your
                  an email with all of the details of your order.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => props.setIsOpen(false)}
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

// Bit of a hack to share the response data type between components
// Really don't recommend this, but if you need to share a queryhook-based response type there's not a lot of options
const useTodosSubscription = () =>
  useTypedSubscription({
    todo: [
      {},
      {
        id: true,
        description: true,
        is_completed: true,
        user_todos: [
          {},
          {
            todo_id: true,
            user_id: true,
            user: {
              id: true,
              username: true,
            },
          },
        ],
      },
    ],
  })

export default function IndexPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [slideOverIsOpen, setSlideOverIsOpen] = useState(false)
  const [slideOverMode, setSlideOverMode] = useState("CREATE" as SlideOverMode)
  const [currentlyEdittedTodo, setCurrentlyEdittedTodo] = useState({} as todo)
  function openSlideOverInMode(mode: SlideOverMode) {
    setSlideOverMode(mode)
    setSlideOverIsOpen(true)
  }

  const { data, loading, error } = useTodosSubscription()

  const [deleteTodoByPk] = useTypedMutation({
    delete_todo_by_pk: [
      {
        id: $`id`,
      },
      {
        id: true,
      },
    ],
  })

  const [updateTodoByPk] = useTypedMutation({
    update_todo_by_pk: [
      {
        pk_columns: { id: $`id` },
        _set: {
          description: $`description`,
          is_completed: $`is_completed`,
        },
      },
      {
        id: true,
      },
    ],
  })

  const [createTodo] = useTypedMutation({
    insert_todo_one: [
      {
        object: {
          description: $`description`,
        },
      },
      {
        id: true,
      },
    ],
  })

  const [addUserToTodoByPk] = useTypedMutation({
    insert_user_todo_one: [
      {
        object: {
          user_id: $`user_id`,
          todo_id: $`todo_id`,
        },
      },
      {
        todo_id: true,
        user_id: true,
      },
    ],
  })

  const [removeUserFromTodo] = useTypedMutation({
    delete_user_todo_by_pk: [
      {
        user_id: $`user_id`,
        todo_id: $`todo_id`,
      },
      {
        todo_id: true,
      },
    ],
  })

  const MainContent = () => {
    switch (true) {
      case loading:
        return <p>Loading</p>

      case error != undefined:
        return <p>Error: {error.message}</p>

      case data?.todo.length == 0:
        return <p>No Todos</p>

      default:
        return (
          <TodoTable
            data={data}
            handleEditButtonClick={(todo) => {
              setCurrentlyEdittedTodo(todo)
              openSlideOverInMode("EDIT")
            }}
            handleDeleteButtonClick={(todo) => {
              deleteTodoByPk({
                variables: {
                  id: todo.id,
                },
              })
            }}
          />
        )
    }
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
      <section className="flex justify-end p-2">
        <IndigoButton
          onClick={() => {
            setCurrentlyEdittedTodo({} as todo)
            openSlideOverInMode("CREATE")
          }}
        >
          New Todo
        </IndigoButton>
      </section>

      <MainContent />

      <TodoEditorSidePanel
        currentlyEdittedTodo={currentlyEdittedTodo}
        setCurrentlyEdittedTodo={setCurrentlyEdittedTodo}
        mode={slideOverMode}
        isOpen={slideOverIsOpen}
        setSlideOverIsOpen={setSlideOverIsOpen}
        handleSaveButtonClick={() => {
          updateTodoByPk({
            variables: {
              ...currentlyEdittedTodo,
            },
          })
        }}
        handleCreateButtonClick={() => {
          createTodo({
            variables: {
              ...currentlyEdittedTodo,
            },
          })
        }}
        handleOnUserAddedToTodo={(todoId, userId) => {
          addUserToTodoByPk({
            variables: {
              user_id: userId,
              todo_id: todoId,
            },
          })
        }}
        handleOnUserRemovedFromTodo={(todoId, userId) => {
          console.log("called handleOnUserRemovedFromTodo with", {
            todoId,
            userId,
          })
          removeUserFromTodo({
            variables: {
              user_id: userId,
              todo_id: todoId,
            },
          })
        }}
      />
    </div>
  )
}

IndexPage.getLayout = (page) => <AppLayout>{page}</AppLayout>
