import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Todo } from "./Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const okClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={okClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}
