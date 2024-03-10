import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeYear={changeYearHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default Expenses;
