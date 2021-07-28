import React from "react"
import Todo from "./Todo"

const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <div className="bg-white overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
