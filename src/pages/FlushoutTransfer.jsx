import React from 'react';

const FlushoutTransfer = () => {
  return (
    <div className='text-white h-screen flex items-center justify-center'>
      <div className='w-full max-w-3xl'>
      <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
          <h2 className=" text-center text-white text-2xl font-bold mb-2">Flushout Transfer</h2>
        
        </div>
        <div className='bg-gradient-to-r from-blue-900 via-black to-purple-900 p-6 rounded-b-lg shadow-md'>
          <div className='mb-4'>
            <label htmlFor='totalfund' className='block text-sm text-white mb-2'>
              Total Fund
            </label>
            <input
              type='text'
              id='totalfund'
              name='totalfund'
              className='w-full p-2 text-black border rounded focus:outline-none focus:ring focus:border-blue-300'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='wallet' className='block text-sm text-white mb-2'>
              Select Wallet
            </label>
            <select
              name='wallet'
              id='wallet'
              className='w-full p-2 border text-black rounded focus:outline-none focus:ring focus:border-blue-300'
            >
              <option value='1' className='text-black'>Fund Wallet</option>
              <option value='2' className='text-black'>Wallet</option>
              <option value='3' className='text-black'>Another Wallet</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='amount' className='block text-sm text-white mb-2'>
              Amount
            </label>
            <input
              type='number'
              id='amount'
              name='amount'
              className='w-full p-2 border text-black rounded focus:outline-none focus:ring focus:border-blue-300'
            />
          </div>
          <button
            type='button'
            className='w-full bg-blue-500  hover:shadow-blue-900 hover:bg-blue-900 text-white px-4 py-2 rounded hover:shadow-lg'
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlushoutTransfer;
