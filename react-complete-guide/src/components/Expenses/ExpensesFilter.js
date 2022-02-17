import './ExpensesFilter.css';

function ExpensesFilter(props) {
  function yearFilterHandler(event) {
    props.onChangeYear(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter by Year</label>
        <select name="filter" id="filterByYear" onChange={yearFilterHandler} selected={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
