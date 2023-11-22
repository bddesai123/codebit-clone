import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Redirect to dashboard if user is already logged in
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request accounts from the user
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const userAddress = accounts[0];
        setWalletAddress(userAddress);

        // Get the current chain ID
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });

        // Compare the chain ID with the expected chain ID for Ethereum mainnet (0x1)
        if (chainId !== "0x1") {
          setError("Please switch to the Ethereum Mainnet to login.");
        } else {
          setError(""); // Clear any previous error
          login(userAddress); // Call login function
          navigate("/dashboard");
        }
      } else {
        setError("Please install MetaMask");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="text-white h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
          <h2 className="text-center text-white text-2xl font-bold mb-2">
            Login
          </h2>
        </div>
        <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 p-6 rounded-b-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="totalfund"
              className="block text-sm text-white mb-2"
            >
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              placeholder=""
              value={walletAddress}
              disabled
              className="w-full p-2 text-black border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="bg-gradient-to-r from-yellow-600  to-pink-600 w-full text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none"
          >
            Login
          </button>

          {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
