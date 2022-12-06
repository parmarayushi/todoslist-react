import React, { useState } from "react";

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (res) => {
        res.preventDefault();
        if (!title || !desc) {
            alert("Title or description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h2 className="text-center">Add Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Tittle</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Desscription</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}