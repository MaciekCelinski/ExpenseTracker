import React, { useContext } from "react";
// import state
import { GlobalContext } from "../context/GobalState";
// components
import { Transaction } from "./Transaction";

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<>
			<h3>History</h3>
			<ul className="list" id="list">
				{transactions.map((transaction) => (
					<Transaction
						transaction={transaction}
						key={transaction.id}
					/>
				))}
			</ul>
		</>
	);
};
