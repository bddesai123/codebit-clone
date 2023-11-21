import React from "react";

const ChangePassword = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-3xl p-8">
        <div className="bg-gradient-to-r from-yellow-600 to-pink-600 rounded-t-lg p-8">
          <h2 className="text-white text-center text-2xl font-bold mb-2">
            Change Password
          </h2>
        </div>

        <div className="form-group p-12 rounded-b-lg bg-gradient-to-r  from-blue-900 via-black to-purple-900">
          <form>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Current Password"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="New Password"
                required
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Your password must be 8-20 characters long.
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
