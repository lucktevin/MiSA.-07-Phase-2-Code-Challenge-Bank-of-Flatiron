import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(transaction);
    setTransaction({
      date: '',
      description: '',
      category: '',
      amount: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="text"
        name="date"
        value={transaction.date}
        onChange={handleChange}
      />
      {/* Repeat for other fields */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
