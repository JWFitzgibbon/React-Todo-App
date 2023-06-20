import "./Button.css";

function Button(props) {
  const classes = "Button " + props.className;
  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
