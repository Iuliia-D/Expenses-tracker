import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { ReactComponent as Edit } from '../../svg/edit.svg';
import { ReactComponent as Done } from '../../svg/done.svg';
import { ReactComponent as Delete } from '../../svg/delete.svg';
import './ExpenseItem.css';

const ExpenseItem = props => {
  const [title, setTitle] = useState(false);

  const clickHandler = () => {
    setTitle(true);
  };
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    console.log(event);
    setTitle(false);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {title && (
            <div>
              <label>Enter a new title</label>
              <input
                type="text"
                // value={enteredTitle}
                // onChange={titleChangeHandler}
              />
            </div>
          )}
          {!title && <h2>{props.title}</h2>}

          <div className="expense-item__price">${props.amount}</div>
          <div className="expense-edit">
            {title ? (
              <button
                onClick={titleChangeHandler}
                className="expense-edit__button"
              >
                <Done />
              </button>
            ) : (
              <button onClick={clickHandler} className="expense-edit__button">
                <Edit />
              </button>
            )}
            {/* <button onClick={clickHandler} className="expense-edit__button">
              <Delete />
            </button> */}
          </div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
