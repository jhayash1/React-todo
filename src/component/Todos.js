import React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
import TodoItem from "./TodoItem"

export default function Todos(props) {
    // const myVariable = 345;
    return (
        <div className="container">
           <h3 className=" mt-3">Todos List</h3>
           {props.todos.length===0?'No todos':
           props.todos.map((todo) =>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
          })
           }
           
            
        </div>
        
    )
}

// ReactDOM.render(<App />, document.querySelector('#app'));