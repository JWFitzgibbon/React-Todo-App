import "./TodoDate.css";

function TodoDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  let currentDate = new Date();

  if (
    currentDate.toLocaleString("en-US", { month: "long" }) === month &&
    currentDate.toLocaleString("en-US", { day: "2-digit" }) === day &&
    currentDate.getFullYear() === year
  ) {
    return (
      <div className="todo-date__current">
        <div className="todo-date__month">{month}</div>
        <div className="todo-date__year">{year}</div>
        <div className="todo-date__day">{day}</div>
      </div>
    );
  }

  return (
    <div
      className={
        props.date.getTime() >= new Date().getTime()
          ? "todo-date"
          : "todo-date__invalid"
      }
    >
      <div className="todo-date__month">{month}</div>
      <div className="todo-date__year">{year}</div>
      <div className="todo-date__day">{day}</div>
    </div>
  );
}

export default TodoDate;
