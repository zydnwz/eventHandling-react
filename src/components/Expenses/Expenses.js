import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpenseForm from './ExpenseForm';
import ExpenseChart from './ExpenseChart'; 
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const addExpenseHandler = (expense) => {
    props.onAddExpense(expense);
    setIsFormVisible(false); 
  };

  const cancelHandler = () => {
    setIsFormVisible(false); 
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (!filteredYear) {
      return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      {!isFormVisible && (
        <button onClick={toggleFormVisibility}>Add Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancel={cancelHandler}
        />
      )}
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={changeYearHandler}
      />
      <ExpenseChart expenses={filteredExpenses} /> {/* Render ExpenseChart component */}
      {filteredExpenses.length === 0 && (
        <p className="expenses-message">No expenses found.</p>
      )}
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
