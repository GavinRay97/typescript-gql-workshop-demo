import AppLayout from "../components/AppLayout"
import TodoHolder from "../components/TodoHolder"
import CreateTodo from "../components/CreateTodo"

import todos from "../utils/helpers/fakeDos"

export default function IndexPage() {
  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Todo</h1>
      </div>
      <div className="px-4 sm:px-6 md:px-0 mb-8">
        <div className="py-4">
          <TodoHolder todos={todos.filter((t) => !t.isCompleted)} />
          <CreateTodo isActive={false} />
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Completed</h1>
      </div>
      <div className="px-4 sm:px-6 md:px-0">
        <div className="py-4">
          <TodoHolder todos={todos.filter((t) => t.isCompleted)} />
        </div>
      </div>
    </div>
  )
}

IndexPage.getLayout = (page) => <AppLayout>{page}</AppLayout>
