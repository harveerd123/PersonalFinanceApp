import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddTransactionForm from '../components/AddTransactionForm';
import { useMemo } from "react";

type Transaction = {
    description: string;
    category: string;
    type: string;
    amount: number;
};
function IncomeExpenseScreen() {
    const [showModal, setShowModal] = useState<boolean>(false);

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    function deleteTransaction(indexToDelete: number): void  {
        const newList: Transaction[] = transactions.filter((_, index) => index !== indexToDelete);
        setTransactions(newList);
    }

    const budget = useMemo(() => {
        const incomeTotal = transactions
            .filter(t => t.type.toLowerCase() === 'income')
            .map(t => t.amount)
            .reduce((sum, amount) => sum + amount, 0);

        const expenseTotal = transactions
            .filter(t => t.type.toLowerCase() === 'expense')
            .map(t => t.amount)
            .reduce((sum, amount) => sum + amount, 0);

        return incomeTotal - expenseTotal;
    }, [transactions]);
    //useMemo remembers the result of a calculation so React doesn’t have to do it again every time the component shows up, but only when something it depends on changes.


  return (
      <>
          <div className="container">
              <h1>Income/Expense Page</h1>
              <p>
                Use the table below to add any incomes/expenses.
              </p>
              <Button variant="primary" onClick={() => setShowModal(true)}>Add Transaction</Button>
              <AddTransactionForm show={showModal} onClose={() => setShowModal(false)}
                  transactionToAdd={(newTransaction) => setTransactions((prev) => [...prev, newTransaction])} />

              <Table bordered hover responsive variant="dark" className="mt-4">
                  <thead>
                      <tr>
                          <th>Description</th>
                          <th>Category</th>
                          <th>Income/Expenses</th>
                          <th>Amount</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {transactions.length === 0 ? (
                          <tr>
                              <td colSpan={5} className="text-center text-muted">
                                  No transactions recorded.
                              </td>
                          </tr>
                      ) : (
                          transactions.map((t, index) => (
                              <tr key={index}>
                                  <td>{t.description}</td>
                                  <td>{t.category}</td>
                                  <td>{t.type}</td>
                                  <td>{new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(t.amount)}</td>
                                  <td><Button variant="danger" onClick={() => deleteTransaction(index)}>Delete</Button></td>
                              </tr>
                          ))
                      )}
                  </tbody>
              </Table>
              <p>
                  Budget Remaining:
                  <strong>
                      {new Intl.NumberFormat("en-GB", {
                          style: "currency",
                          currency: "GBP",
                      }).format(budget)}
                  </strong>
              </p>
          </div>

      </>
  );
}

export default IncomeExpenseScreen;