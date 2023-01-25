import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Transaction from "./components/Transaction.js"
import ViewBalance from './components/ViewBalance.js'
import ViewHistory from './components/ViewHistory.js'
function App() {
  return (
    <div className="App">
        <h2>E$M Tech Bank</h2>
      <h5>Customer Name: Ian Technologies </h5>
      <Routes>
         <Route
          exact
          path="/"
          element={<Transaction />}
        ></Route>
          <Route
          exact
          path="/balance"
          element={<ViewBalance />}
        ></Route>
          <Route
          exact
          path="/history"
          element={<ViewHistory />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
