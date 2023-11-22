import React from 'react'

const MyDirectTeam = () => {
    const users = [
        { memberID: '001', regDate: '2023-01-01', mobileNumber: '1234567890', status: 'active', memberName: 'John Doe', email: 'john@example.com' },
        { memberID: '002', regDate: '2023-02-01', mobileNumber: '9876543210', status: 'inactive', memberName: 'Jane Doe', email: 'jane@example.com' },
        // Add more user data as needed
      ];
  return (
    <div className='text-white min-h-screen min-w-screen'>
      
      
    
    <div className=' p-4 md:p-8 rounded-lg'>
    <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg  p-4 md:p-8">
          <h2 className="text-white text-center text-xl md:text-2xl font-bold mb-2">MyDirectTeam</h2>
        </div>
    <div className="overflow-x-auto pb-8">
      <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 rounded-b-lg  text-whiteoverflow-hidden shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-2 md:px-4">Member ID</th>
            <th className="py-2 px-2 md:px-4">Registration Date</th>
            <th className="py-2 px-2 md:px-4">Mobile Number</th>
            <th className="py-2 px-2 md:px-4">Status</th>
            <th className="py-2 px-2 md:px-4">Member Name</th>
            <th className="py-2 px-2 md:px-4">Email ID</th>
            <th className="py-2 px-2 md:px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="py-2 text-center px-2 md:px-4">{user.memberID}</td>
              <td className="py-2 text-center px-2 md:px-4">{user.regDate}</td>
              <td className="py-2 text-center px-2 md:px-4">{user.mobileNumber}</td>
              <td className="py-2 text-center px-2 md:px-4">{user.status}</td>
              <td className="py-2 text-center px-2 md:px-4">{user.memberName}</td>
              <td className="py-2 text-center px-2 md:px-4">{user.email}</td>
              <td className="py-2 text-center px-2 md:px-4">
                <button
                  className={`bg-blue-500 text-white px-3 py-1 rounded-full ${
                    user.status === 'active' ? 'bg-opacity-50 cursor-not-allowed' : 'hover:bg-opacity-80'
                  }`}
                  onClick={() => handleButtonClick(user.memberID, user.status)}
                  disabled={user.status === 'active'}
                >
                  Activate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
     
    </div>
  )
}

export default MyDirectTeam;


