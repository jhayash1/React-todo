import React from "react";

export default function TodoItem({ todo,onDelete }) {
  return (
    <div className="alert alert-success" role={'alert'}>
      <div className="d-flex">
        <div className="me-3">
          <h4>{todo.sno}</h4>
        </div>
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
          <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
      </div>
    </div>
  );
}
