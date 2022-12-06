import React from "react";

export default function TodoItem({ todo, onDelete }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((items) => {
                        return (
                            <tr key={items.id}>
                                <th scope="row">{items.id}</th>
                                <td>{items.title}</td>
                                <td>{items.desc}</td>
                                <td> <button className="btn btn-danger btn-sm" onClick={() => { onDelete(items) }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}