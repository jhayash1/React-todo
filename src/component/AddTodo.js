import React from "react";
import { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("sss");
    if(!title || !desc){
        alert('title');
    }
    props.addTodo(title, desc);
  };
  return (
    <div className="container">
      <h3 className="mt-3">Add a Todo</h3>
      <div className="alert alert-primary">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Todo Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Discription
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Submit
        </button>
      </form>
          
        </div>
    </div>
  );
};
