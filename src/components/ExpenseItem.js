import "./ExpenseItem.css";
import Something from './ExpenseDate.js'
function ExpenseItem() {
  return (
    <div>
        <Something/>
      <h2>Expense Item</h2>
      <div class="expense_main">
          <div>
              This is the first Inner Div
          </div>
        <p>This is just some vivid color</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
