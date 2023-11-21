import React from "react";

const LevelIncome = () => {
  // Sample data
  const levelIncomedata = [
    { userId: "User1", level: "Silver", amount: 100, transfer: "User2", date: "2023-01-01" },
    { userId: "User2", level: "Gold", amount: 150, transfer: "User3", date: "2023-02-01" },
    { userId: "User3", level: "Platinum", amount: 200, transfer: "User4", date: "2023-03-01" },
    // Add more data as needed
  ];

  return (
    <div className="h-screen p-8">
      <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
        <h2 className="text-white text-center text-2xl font-bold mb-2">
          My Level Income
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white rounded-b-lg overflow-hidden shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4">User ID</th>
                <th className="py-2 px-4">Level</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Transfer to</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {levelIncomedata.map((entry, index) => (
                <tr key={index}>
                  <td className="py-2 text-center px-4">{entry.userId}</td>
                  <td className="py-2 text-center px-4">{entry.level}</td>
                  <td className="py-2 text-center px-4">{entry.amount}</td>
                  <td className="py-2 text-center px-4">{entry.transfer}</td>
                  <td className="py-2 text-center px-4">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LevelIncome;
