import { Button, Table } from "react-bootstrap";

function IncomeOutcomeScreen() {
  return (
      <>
          <div className="container">
              <h1>Income/Outcome Page</h1>
              <p>
                Use the table below to add any incomes/outcomes.
              </p>
              <Button variant="primary">Add Transaction</Button>
              <Table bordered hover responsive variant="dark" className="mt-4">
                  <thead>
                      <tr>
                          <th>Description</th>
                          <th>Category</th>
                          <th>Income/Outcome</th>
                          <th>Amount</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      </tr>
                  </tbody>
              </Table>
              <p>
                  Budget Remaining:
              </p>
          </div>

      </>
  );
}

export default IncomeOutcomeScreen;