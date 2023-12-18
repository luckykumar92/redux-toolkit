import React from "react";
import AddTodo from "./components/Addtodo";
import Todos from "./components/Todo";

const App = () => {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
