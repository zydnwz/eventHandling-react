import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const changeAmountHandler = () => {
    setAmount(100);
    console.log('Amount changed to $100');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{title}</h2>
        <div className='expense-item_price'>${amount}</div>
      </div>
      <div className='expense-item_buttons'>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={changeAmountHandler}>Change Amount</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
