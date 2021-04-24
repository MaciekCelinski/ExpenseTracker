import React, { useContext } from "react";
import { GlobalContext } from "../context/GobalState";

function IncomeExpenses() {
	const { transactions } = useContext(GlobalContext);

	const incomeValues = transactions.filter(
		(transaction) => transaction.amount > 0
	);
	const income = incomeValues.reduce((total, item) => total + item.amount, 0);

	const expenseValues = transactions.filter(
		(transaction) => transaction.amount < 0
	);
	const expense = Math.abs(
		expenseValues.reduce((total, item) => total - item.amount, 0)
	);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p id="money-plus" className="money plus">
					${income}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p id="money-minus" className="money minus">
					${expense}
				</p>
			</div>
		</div>
	);
}

export default IncomeExpenses;
