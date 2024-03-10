import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={amountChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={dateChangeHandler}
          required
        />
      </div>
      <div>
        <button type="submit">Add Expense</button>
        <button type="button" onClick={cancelHandler}>Cancel</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
