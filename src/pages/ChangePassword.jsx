import React from "react";

const ChangePassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 md:p-6 lg:p-8">
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
              className="bg-gradient-to-r from-yellow-600  to-pink-600 w-full text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none" 
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
