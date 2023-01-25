import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function ViewHistory() {
  const [account, setAccount] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`/transactions?account=${account}`)
    .then((response) => response.json())
    .then((data) => {
      setTransactions(data);
    });
}, [account]);

function handleSubmit(e) {
e.preventDefault();
setAccount(e.target.value);
}

return (
<div>
{/* <Link to="/transaction">Make a Transaction</Link>
<Link to="/viewbalance">View History</Link> */}
<form>
<label>
    Account:
    <input
        type="text"
        value={account}
        onChange={handleSubmit}
        />
</label>
<br />
<button type="submit">View History</button>
<br />
<label>
    Transactions:
    <ul>
    {transactions.map((transaction) => (
    <li key={transaction.id}>
    From: {transaction.from_account} To: {transaction.to_account} Amount: {transaction.amount}
    </li>
    ))}
    </ul>
</label>
</form>
<Link to='/' class='back'>Back</Link>
</div>

);
}

export default ViewHistory;

  