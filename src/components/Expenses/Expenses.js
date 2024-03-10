import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    if (!filteredYear) {
      return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={changeYearHandler} />
      {filteredExpenses.length === 0 && <p className="expenses-message">No expenses found.</p>}
      {filteredExpenses.length === 1 && <p className="expenses-message">Only single expense here. Please add more...</p>}
      {filteredExpenses.length > 1 && filteredExpenses.map((expense) => (
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
