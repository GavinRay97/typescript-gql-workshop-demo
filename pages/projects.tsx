import React from "react"

import AppLayout from "../components/AppLayout"
import TodoHolder from "../components/TodoHolder"
import CreateTodo from "../components/CreateTodo"

import todos from "../utils/helpers/fakeDos"

export default function Projects() {
  const projects = todos.reduce((collector, current) => {
    let sort = current.project
    if (collector.has(sort)) {
      collector.get(sort).push(current)
    } else {
      collector.set(sort, [current])
    }
    return collector
  }, new Map())

  return (
    <div className="py-6">
      {[...projects.entries()].map((team, index) => {
        const [label, todos] = team

        return (
          <React.Fragment key={index}>
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-2xl font-semibold text-gray-900">{label}</h1>
            </div>
            <div className="px-4 sm:px-6 md:px-0 mb-8">
              <div className="py-4">
                <TodoHolder todos={todos.filter((t) => !t.isCompleted)} />
                <CreateTodo isActive={false} />
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

Projects.getLayout = (page) => <AppLayout>{page}</AppLayout>
