import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Expense Title:</label>
        <input
          type="text"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          min="2022-01-01"
          max="2025-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
