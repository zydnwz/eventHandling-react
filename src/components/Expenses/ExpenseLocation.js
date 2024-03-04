import React from 'react';
import './ExpenseLocation.css';

function ExpenseLocation(props) {
  return (
    <div className="expense-location">
      <p>Location: {props.location}</p>
    </div>
  );
}

export default ExpenseLocation;
