const MyLevelTeam = () => {
  const rebirthData = [
    { srNo: 1, userId: "ABC123", level: "Bronze", name: "John Doe", date: "2023-01-01", status: "Active" },
    { srNo: 2, userId: "XYZ456", level: "Silver", name: "Jane Doe", date: "2023-02-01", status: "Inactive" },
    { srNo: 3, userId: "DEF789", level: "Gold", name: "Alice", date: "2023-03-01", status: "Active" },
    // Add more rebirth data as needed
  ];

  return (
    <div className="min-h-screen mini-w-screen p-4 md:p-8">
      <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-4 md:p-8">
          <h2 className="text-white text-center text-xl md:text-2xl font-bold mb-2">My Level Team</h2>
        </div>
      <div>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white rounded-b-lg overflow-hidden shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-2 md:px-4">Sr. No</th>
                <th className="py-2 px-2 md:px-4">User ID</th>
                <th className="py-2 px-2 md:px-4">Level</th>
                <th className="py-2 px-2 md:px-4">Name</th>
                <th className="py-2 px-2 md:px-4">Date</th>
                <th className="py-2 px-2 md:px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {rebirthData.map((rebirth, index) => (
                <tr key={index}>
                  <td className="py-2 text-center px-2 md:px-4">{rebirth.srNo}</td>
                  <td className="py-2 text-center px-2 md:px-4">{rebirth.userId}</td>
                  <td className="py-2 text-center px-2 md:px-4">{rebirth.level}</td>
                  <td className="py-2 text-center px-2 md:px-4">{rebirth.name}</td>
                  <td className="py-2 text-center px-2 md:px-4">{rebirth.date}</td>
                  <td className="py-2 text-center px-2 md:px-4">{rebirth.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyLevelTeam;
