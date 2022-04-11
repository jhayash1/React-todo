import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React, { useState } from "react";
import Header from "./component/header";
import Todos from "./component/Todos";
import Footer from "./component/footer";
import { AddTodo } from "./component/AddTodo";

function App() {
  const addTodo = (title , desc) => {
    console.log('submit',title,desc)
    let sno;
    if(todos.length===0) {
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const onDelete = (todo) => {
    console.log("delete");
    setTodos(todos.filter((e)=>{
     return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
   
  ]);
  return (
    <div className="App">
      <Header title="My Todo List" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
