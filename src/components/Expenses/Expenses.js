import "./Expenses.css";
import React,{useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
const  Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
/*   let expensesContent = <p>No expenses found .</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } */
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} 
      onChangeFilter={filterChangeHandler} />

      { /* filteredExpenses.length === 0  && <p>No Expenses Found.</p> */ }

            { /* expensesContent */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
