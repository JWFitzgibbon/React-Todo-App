import "./NewTodo.css";
import Button from "../UI/Button";
import { useState } from "react";

function NewTodo(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [fieldVisible, setFieldVisible] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoContent = {
      id: Math.random(),
      title: enteredTitle,
      date: new Date(enteredDate),
    };

    props.onSaveTodo(todoContent);
    setEnteredTitle("");
    setEnteredDate("");
    setFieldVisible(!fieldVisible);
  };

  const fieldVisibleHandler = () => {
    setFieldVisible(true);
  };

  const closeFieldHandler = () => {
    setFieldVisible(false);
  };

  return (
    <div className="new-todo">
      {!fieldVisible && (
        <Button onClick={fieldVisibleHandler}>Add New Todo</Button>
      )}
      {fieldVisible && (
        <form onSubmit={submitHandler}>
          <div className="new-todo__controls">
            <div className="new-todo__control">
              <label>Task</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-todo__control">
              <label>Start Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2020-01-01"
                max="2025-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-todo__actions">
            <Button type="button" onClick={closeFieldHandler}>
              Cancel
            </Button>
            <Button type="submit">Add Todo</Button>
          </div>
          <p>{enteredTitle}</p>
          <p>{enteredDate}</p>
        </form>
      )}
    </div>
  );
}

export default NewTodo;
