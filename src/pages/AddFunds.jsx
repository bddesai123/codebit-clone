import React from 'react'

const AddFunds = () => {
  return (
    <div className="text-white h-screen flex items-center justify-center">
    <div className="w-full max-w-3xl">
      <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
        <h2 className=" text-center text-white text-2xl font-bold mb-2">
          Add Funds{" "}
        </h2>
      </div>
      <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 p-6 rounded-b-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="totalfund"
            className="block text-sm text-white mb-2"
          >
            Current Balance in BUSD
          </label>
          <input
            type="text"
            id="currentbalance"
            name="currentbalance"
            placeholder='1000 BUSD$'
            disabled
            className="w-full p-2 text-black  border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm text-white mb-2">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="w-full p-2 border text-black rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="button"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
        >
          Add Fund
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddFunds;
