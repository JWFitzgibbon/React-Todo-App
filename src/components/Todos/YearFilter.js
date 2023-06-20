import "./YearFilter.css";
import Card from "../UI/Card";

const YearFilter = (props) => {
  const dateChangeHandler = (event) => {
    props.onDateChange(event.target.value);
  };

  return (
    <Card className="todos-filter">
      <div className="todos-filter__control">
        <label>Filter by year</label>
        <select value={props.entered} onChange={dateChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </Card>
  );
};

export default YearFilter;
