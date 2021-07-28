import React from "react"
import classNames from "../utils/helpers/classNames"

import { CalendarIcon, ArchiveIcon, UsersIcon } from "@heroicons/react/solid"

type Todo = {
  description: string
  importance: string
  project: string
  department: string
  dueDate: string
  isCompleted: boolean
}

const Todo: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <li>
      <a
        href="#"
        className={classNames(
          todo.isCompleted ? "bg-gray-50 line-through" : "hover:bg-gray-50",
          "block",
        )}
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-start gap-3">
            <input
              id="comments"
              aria-describedby="comments-description"
              checked={todo.isCompleted}
              name="comments"
              type="checkbox"
              onChange={(v) => null}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <p className="text-sm font-medium text-indigo-600 truncate">
              {todo.description}
            </p>
            <div className="ml-auto flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {todo.importance}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                <ArchiveIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                {todo.project}
              </p>
              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                <UsersIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                {todo.department}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <p>
                Due <time dateTime={todo.dueDate}>{todo.dueDate}</time>
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default Todo
