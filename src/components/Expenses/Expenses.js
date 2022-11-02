import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const onChooseYearHandler = year => {
    setFilteredYear(year);
  };

  const filterdItems = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChooseYear={onChooseYearHandler}
      />
      {filterdItems.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
export default Expenses;
