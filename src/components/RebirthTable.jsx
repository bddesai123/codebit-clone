
const RebirthTable = () => {
  const rebirthData = [
    { srNo: 1, level: 'Bronze', status: 'Active' },
    { srNo: 2, level: 'Silver', status: 'Inactive' },
    { srNo: 3, level: 'Gold', status: 'Active' },
    // Add more rebirth data as needed
  ];

  return (
    <>
    <div className="overflow-x-auto m-8">
      <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4">Sr. No</th>
            <th className="py-2 px-4">Level</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {rebirthData.map((rebirth, index) => (
            <tr key={index}>
              <td className="py-2 text-center  px-4">{rebirth.srNo}</td>
              <td className="py-2  text-center px-4">{rebirth.level}</td>
              <td className="py-2 text-center  px-4">{rebirth.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default RebirthTable;
