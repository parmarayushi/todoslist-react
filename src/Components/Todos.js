import React from "react";
import TodoItem from '../Components/TodoItem'

export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todo List</h3>
            {/* {props.todos.length === 0 ? "No Todos to Display" : props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
            })} */}
            <TodoItem todo={props.todo} onDelete={props.onDelete} />
        </div>
    )
}