import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddTransactionForm from '../components/AddTransactionForm';

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
              </p>
          </div>

      </>
  );
}

export default IncomeExpenseScreen;