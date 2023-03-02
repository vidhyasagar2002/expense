import "./Expenses.css";

function expenses(props) {
  return (
    <div>
      <h2>lets start</h2>
      <ExpenseIteam
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseIteam>
    </div>
  );
}
