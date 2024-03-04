import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'; 

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!!');
  };

  const deleteExpense = () => {
    const expenseItem = document.getElementById(props.id);
    expenseItem.parentNode.removeChild(expenseItem);
    console.log('Expense deleted:', props.title);
  };

  return (
    <Card className='expense-item' id={props.id}>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
      </div>
      <div className='expense-item_buttons'>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteExpense} className="delete-button">Delete Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
