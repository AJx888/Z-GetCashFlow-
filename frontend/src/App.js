import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cashFlow, setCashFlow] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    fetch('/api/cashflow')
      .then(res => res.json())
      .then(data => {
        setCashFlow(data.netCashFlow);
        setRevenue(data.revenue);
        setExpenses(data.expenses);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-800">CashFlow Pro</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Cash Balance</h2>
          <p className="text-2xl">${cashFlow.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl text-green-600">${revenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Expenses</h2>
          <p className="text-2xl text-red-600">${expenses.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Forecast</h2>
          <p className="text-2xl text-blue-600">+18%</p>
        </div>
      </div>
    </div>
  );
}

export default App;
