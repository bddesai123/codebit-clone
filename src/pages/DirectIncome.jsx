import React from "react";

const DirectIncome = () => {
  // Sample data
  const directIncomedata = [
    { debitcredit: "Credit", amount: 100, transfer: "User1", date: "2023-01-01" },
    { debitcredit: "Debit", amount: 50, transfer: "User2", date: "2023-02-01" },
    { debitcredit: "Credit", amount: 75, transfer: "User3", date: "2023-03-01" },
    // Add more data as needed
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-4 md:p-8">
        <h2 className="text-white text-center text-xl md:text-2xl font-bold mb-2">
          My Direct Income
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white rounded-b-lg overflow-hidden shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-2 md:px-4">Debit/Credit</th>
                <th className="py-2 px-2 md:px-4">Amount</th>
                <th className="py-2 px-2 md:px-4">Transfer to</th>
                <th className="py-2 px-2 md:px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {directIncomedata.map((entry, index) => (
                <tr key={index}>
                  <td className="py-2 text-center px-2 md:px-4">{entry.debitcredit}</td>
                  <td className="py-2 text-center px-2 md:px-4">{entry.amount}</td>
                  <td className="py-2 text-center px-2 md:px-4">{entry.transfer}</td>
                  <td className="py-2 text-center px-2 md:px-4">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DirectIncome;
