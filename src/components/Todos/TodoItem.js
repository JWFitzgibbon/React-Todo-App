import "./TodoItem.css";
import TodoDate from "./TodoDate";
import Card from "../UI/Card";
import Button from "../UI/Button";

function TodoItem(props) {
  return (
    <li>
      <Card className="todo-item">
        <TodoDate date={props.date} />
        <div className="todo-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="todo-item__options">
          {/* <Button>Edit</Button>
          <Button>Remove</Button> */}
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
