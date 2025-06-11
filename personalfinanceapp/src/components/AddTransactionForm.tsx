import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Transaction = {
    description: string;
    category: string;
    type: string;
    amount: number;
};

function AddTransactionForm({ show, onClose, transactionToAdd }:{ show: boolean; onClose: () => void; transactionToAdd: (transaction: Transaction) => void }) {
    const [description, setDescription] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    const [validated, setValidated] = useState(false);
    function handleSubmit(): void {
        if (description && category && type && amount > 0) {
            const newTransaction: Transaction = {
                description,
                category,
                type,
                amount
            };
            transactionToAdd(newTransaction);
            onClose();

            setDescription('');
            setCategory('');
            setType('');
            setAmount(0);
            setValidated(false);
        } else {
            setValidated(true);
        }
    }

    return (
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Add Transaction</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a description.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">-- Select Category --</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Salary">Salary</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Please provide a category.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Income/Expense</Form.Label>
                    <Form.Select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">-- Select Income --</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Please provide a income/expense.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Enter amount"
                            required
                            min="0.01"
                            step="0.01"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a amount.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
          </Modal.Footer>
      </Modal>
  );
}

export default AddTransactionForm;