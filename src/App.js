import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";
import { useState } from "react";
import SEED_TODOS from "./seed/seed";

function App() {
  const [todos, setTodos] = useState(SEED_TODOS);

  const addTodoHandler = (newTodoData) => {
    setTodos((prevtodos) => {
      return [newTodoData, ...todos];
    });
  };

  return (
    <div className="App">
      <NewTodo onSaveTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
