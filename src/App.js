// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Transaction from "./components/Transaction.js"
import ViewBalance from './components/ViewBalance.js'
import ViewHistory from './components/ViewHistory.js'
function App() {
  return (
    <div className="App">
      < Transaction />
      <ViewBalance /> 
     <ViewHistory />
   
    </div>
  );
}

export default App;
