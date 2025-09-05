import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [users, setUsers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    setUsers(1243);
    setRevenue(45200);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-800">Admin Panel</h1>
      <div className="mt-4">
        <p>👥 Users: {users}</p>
        <p>💰 Revenue: ${revenue.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default AdminPanel;
