import ExpecseDate from './ExpecseDate';
import Card from './Card';
import './ExpecnseItem.css';

const ExpecnseItem = props => {
  return (
    <Card className="expense-item">
      <ExpecseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpecnseItem;
