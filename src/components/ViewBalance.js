import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function ViewBalance() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch(`/accounts/${account}`)
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
      });
  }, [account]);

  function handleSubmit(e) {
    e.preventDefault();
    setAccount(e.target.value);
  }

  return (
    <div>

       {/* <Link to="/transaction">Make a Transaction</Link> */}
      {/* <Link to="/viewhistory">View History</Link> */} 
      <p>My Bank balance in KSH.</p>
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
      <button type="submit">View Balance</button>
      <br />
      <label>
        Balance: {balance}
      </label>
    </form>
    <Link to='/' class='back'>Back</Link>
    </div>
   
  );
}

export default ViewBalance;
