import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/Expenses/ExpenseForm';
import './App.css';

function App() {
  const initialExpenses = [
    {
      id: 'el',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Grocery Store'
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: 'Electronics Store'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 6, 25),
      location: 'Insurance Company'
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
