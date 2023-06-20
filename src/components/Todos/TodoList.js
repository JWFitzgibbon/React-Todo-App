import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="todos-list__fallback">Nothing to do ...</h2>;
  }

  return (
    <ul className="todos-list">
      {props.items.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} date={todo.date} />
      ))}
    </ul>
  );
};

export default TodoList;
