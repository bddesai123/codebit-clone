import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa6';

const Profile = () => {
  const [user, setUser] = useState({
    sponsorId: 'XXXXX',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    number: 7877411484,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user information
  };

  return (
    <div className="flex items-center  justify-center min-h-screen p-4 md:p-6 lg:p-8">
      <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 rounded-lg shadow-lg hover:shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl  ">
        <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
          <h2 className=" text-center text-white text-2xl font-bold mb-2">Profile</h2>
        
        </div>
        <div className="text-center my-4">
          <FaUser className="text-6xl text-white mx-auto" />
        </div>
        <form onSubmit={handleSubmit} className="text-left p-8 w-full">
          <div className="mb-4">
            <label htmlFor="sponsorId" className="block text-sm  text-white mb-2">Sponsor ID</label>
            <input
              type="text"
              id="sponsorId"
              name="sponsorId"
              value={user.sponsorId}
              onChange={handleInputChange}
              disabled
              className="input-field-disabled w-full  rounded-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block  text-white text-sm mb-2">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              className="input-field w-full rounded-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-white text-sm mb-2">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              className="input-field  rounded-sm w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="input-field  rounded-sm w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-white text-sm mb-2">Phone Number:</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={user.number}
              onChange={handleInputChange}
              className="input-field  rounded-sm w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-600  to-pink-600 w-full text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none" 
          >
            Update Profile
          </button>
        </form>

        
      </div>
    
    </div>
  );
};

export default Profile;
