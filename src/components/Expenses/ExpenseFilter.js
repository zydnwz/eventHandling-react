import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const changeYearHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <label>Filter by Year</label>
      <select value={props.selectedYear} onChange={changeYearHandler}>
        <option value="">All</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
