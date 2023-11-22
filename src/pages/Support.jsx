import React from "react";

const Support = () => {
  return (
    <div className="text-white h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
          <h2 className=" text-center text-white text-2xl font-bold mb-2">
           Support
          </h2>
        </div>
        <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 p-6 rounded-b-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="totalfund"
              className="block text-sm text-white mb-2"
            >
             User ID
            </label>
            <input
              type="text"
              id="userid"
              name="userid"
              placeholder="123546"
              disabled
              className="w-full p-2 text-black border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="wallet" className="block text-sm text-white mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border text-black rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm text-white mb-2">
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              className="w-full p-2 border text-black rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="button"
            className="bg-gradient-to-r from-yellow-600  to-pink-600 w-full  text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none" 
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
