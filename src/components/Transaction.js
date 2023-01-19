import React, { useState } from 'react';
import './style.css'
// import { Link } from 'react-router-dom';
function Transaction() {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const fromAccount = formData.get('fromAccount');
    const toAccount = formData.get('toAccount');
    const amount = formData.get('amount');

    fetch('http://127.0.0.1:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fromAccount, toAccount, amount })
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Transaction failed');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
}


  return (
    <div>
      <h2>E$M Tech Bank</h2>
      <h5>Customer Name: Ian Technologies </h5>
      <p>Time of transaction: </p>
      {/* <Link to="/viewbalance">View Balance</Link>
      <Link to="/viewhistory">View History</Link> */}
    <form onSubmit={handleSubmit}>
      <label>
        From Account:
        <input
          type="text"
          value={fromAccount}
          onChange={(e) => setFromAccount(e.target.value)}
        />
      </label>
      <br />
      <label>
        To Account:
        <input
          type="text"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
    
    </div>
  );
}

export default Transaction;
