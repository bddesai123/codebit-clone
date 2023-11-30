import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";
import { useWallet } from "../components/WalletContext";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const { walletAddress: contextWalletAddress, updateWalletAddress } = useWallet();
  const [error, setError] = useState("");
  const [refid, setRefid] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  useEffect(() => {
    // Redirect to dashboard if the user is already logged in
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleMetaMaskTasks = useCallback(async () => {
    let cachedAddress;

    try {
      if (!window.ethereum) {
        setError("Please install MetaMask");
        toast.error("Please install MetaMask");
        return null;
      }

      // Use the cached address if available
      if (cachedAddress) {
        return cachedAddress;
      }

      setLoading(true);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      cachedAddress = accounts[0];
      updateWalletAddress(cachedAddress);

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      if (chainId !== "0x61") {
        setError("Please switch to the tBNB Mainnet.");
        toast.error("Please switch to the tBNB Mainnet.");
        return null;
      }

      setError("");
      return cachedAddress;
    } catch (error) {
      setError("Error during MetaMask tasks");
      toast.error(`Error during MetaMask tasks: ${error.message}`);
      return null;
    } finally {
      setLoading(false);
    }
  }, [updateWalletAddress]);

  const handleApiRequest = async (url, successMessage) => {
    try {
      const userAddress = await handleMetaMaskTasks();

      if (userAddress) {
        setLoading(true);

        const response = await fetch(url);
        const responseData = await response.json();

        setRegistrationStatus(responseData);

        if (
          Array.isArray(responseData) &&
          responseData.includes("Message:Successlly Login") &&
          responseData.includes("Status:200")
        ) {
          // toast(responseData[0]);
          login(userAddress);
          toast.success(successMessage);
          navigate("/dashboard");
        } else {
          toast.error(responseData[0]);
        }
      }
    } catch (error) {
      toast.error(`Error during operation: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = async () => {
    try {
      const userAddress = await handleMetaMaskTasks();

      if (userAddress) {
        setLoading(true);

        const response = await fetch(
          `https://forline.live/api/check-register.php?address=${userAddress}`
        );
        const responseData = await response.json();

        setRegistrationStatus(responseData);
      }
    } catch (error) {
      toast.error(`Error during operation: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    const url = `https://forline.live/api/login.php?address=${contextWalletAddress}`;
    handleApiRequest(url, "User login successful!");
  };

  const handleRegister = () => {
    const url = `https://forline.live/api/register.php?address=${contextWalletAddress}&refid=${refid}`;
    handleApiRequest(url, "User registered and logged in!");
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 md:p-6 lg:p-8">
        <div className="bg-gradient-to-r from-yellow-600 to-pink-600 rounded-t-lg p-8">
          <h2 className="text-center text-white text-2xl font-bold mb-2">
            User
          </h2>
        </div>
        <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 p-6 rounded-b-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="walletAddress"
              className="block text-xl font-semibold text-center text-white mb-2"
            >
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              placeholder=""
              value={contextWalletAddress}
              disabled
              className="w-full p-2 text-black border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {registrationStatus &&
            (registrationStatus.includes("Message:This Address Is Not Registered") &&
            registrationStatus.includes("Status:400") ? (
              <button
                type="button"
                onClick={handleRegister}
                className="bg-gradient-to-r from-yellow-600 to-pink-600 w-full text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleLogin}
                className="bg-gradient-to-r from-yellow-600 to-pink-600 w-full text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            ))}

          {!registrationStatus && (
            <button
              type="button"
              onClick={handleConnect}
              className="bg-gradient-to-r from-yellow-600 to-pink-600 w-full text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none"
            >
              {loading ? "Connecting..." : "Connect"}
            </button>
          )}

          {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
