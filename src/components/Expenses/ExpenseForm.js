import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    const newValue = event.target.value;
    console.log('Title:', newValue);
    setTitle(newValue);
  };

  const amountChangeHandler = (event) => {
    const newValue = event.target.value;
    console.log('Amount:', newValue);
    setAmount(newValue);
  };

  const dateChangeHandler = (event) => {
    const newValue = event.target.value;
    console.log('Date:', newValue);
    setDate(newValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    };
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Expense Title:</label>
        <input
          type="text"
          id="title"
          value={title}
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
          value={amount}
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
          value={date}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
