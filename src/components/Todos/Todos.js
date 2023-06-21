import "./Todos.css";
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import { useState } from "react";
import TodoList from "./TodoList";

function Todos(props) {
  const [year, setYear] = useState("2022");

  const dateChangeHandler = (enteredDate) => {
    setYear(enteredDate);
  };

  const dateFilteredTodos = props.items.filter((todo) => {
    return todo.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="todos">
        <YearFilter
          selected={dateFilteredTodos}
          onDateChange={dateChangeHandler}
        />
        <TodoList items={dateFilteredTodos} />
      </Card>
    </div>
  );
}

export default Todos;
