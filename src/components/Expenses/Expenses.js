import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState);
  };

  const filteredExpenses = props.items.filter(expense => {
    if (!filteredYear) {
      return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <button onClick={toggleFormVisibility}>Add Expenses</button>
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={changeYearHandler} />
      {isFormVisible && (
        <form>
          {/* Form fields go here */}
          <button type="submit">Add Expense</button>
        </form>
      )}
      {filteredExpenses.length === 0 && <p className="expenses-message">No expenses found.</p>}
      {filteredExpenses.map((expense) => (
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
