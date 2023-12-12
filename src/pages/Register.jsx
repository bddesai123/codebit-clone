import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../components/Auth";
import { useWallet } from "../components/WalletContext";
import toast from "react-hot-toast";
import { ethers } from "ethers";

const Register = () => {
  const navigate = useNavigate();
  const { ref: urlRefid } = useParams();

  const { user, login } = useAuth();
  const { walletAddress: contextWalletAddress, updateWalletAddress } =
    useWallet();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  useEffect(() => {
    // Redirect to dashboard if the user is already logged in
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);


  const handleMetaMaskTasks = useCallback(async () => {
    try {
      if (!window.ethereum) {
        setError("Please install MetaMask");
        toast.error("Please install MetaMask");
        return null;
      }

      setLoading(true);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const cachedAddress = accounts[0];
      updateWalletAddress(cachedAddress);

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      if (chainId !== "0x61") {
        setError("Please switch to the BNB Mainnet.");
        toast.error("Please switch to the BNB Mainnet.");
        return null;
      }

      setError("");
      return cachedAddress;
    } catch (error) {
      setError(`Error during MetaMask tasks: ${error.message}`);
      toast.error(`Error during MetaMask tasks: ${error.message}`);
      return null;
    } finally {
      setLoading(false);
    }
  }, [updateWalletAddress]);



  const handleConnect = async () => {
    try {
      const userAddress = await handleMetaMaskTasks();

      if (userAddress) {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_CHECK_USER_API}?address=${userAddress}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();

       
        if (responseData.message === "user exists") {
          setRegistrationStatus(responseData);
        } else if(responseData.message === "user does not exist"){
          setRegistrationStatus(responseData);
        }
      }
    } catch (error) {
      toast.error(`Error during operation: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
  
      const response = await fetch(
        `${import.meta.env.VITE_LOGIN_API}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({address:contextWalletAddress}),
        }
      );
   
      const responseData = await response.json();
      
      setRegistrationStatus(responseData);
    
  
      if (responseData.message === "Login Successfully") {
        login(contextWalletAddress);
        toast.success("User login successful!");
        navigate("/dashboard");
      } else {
        toast(responseData.message);
      }
    } catch (error) {
      toast.error(`Error during operation: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  //register started

  const handleMetaMaskTasks2 = useCallback(async () => {
    try {
      if (!window.ethereum) {
        throw new Error("Please install MetaMask");
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      return new ethers.providers.Web3Provider(window.ethereum).getSigner();
    } catch (error) {
      console.error("Error during MetaMask tasks:", error);
      toast.error(`Error during MetaMask tasks: ${error.message}`);
      return null;
    }
  }, []);

  const handleRegister = async () => {
    const signer = await handleMetaMaskTasks2();
  
    if (!signer) {
      return;
    }
  
    const tokenContract = new ethers.Contract(
      import.meta.env.VITE_TOKEN_CONTRACT,
      [
        {
          name: "transfer",
          type: "function",
          inputs: [
            { name: "_to", type: "address" },
            { type: "uint256", name: "_tokens" },
          ],
          constant: false,
          outputs: [],
          payable: false,
        },
      ],
      signer
    );
  
    const recipientAddress = import.meta.env.VITE_recipientAddress;
    const recipient = ethers.utils.getAddress(recipientAddress);
    const transferAmount = 50; // Adjust this value as needed
    const amount = ethers.utils.parseUnits(transferAmount.toString(), 18);
  
    try {
      const transaction = await tokenContract.transfer(recipient, amount, {
        gasLimit: 100000,
        gasPrice: ethers.utils.parseUnits("50", "gwei"),
      });
  
      toast.success(`Transfer successful! tx : ${transaction.hash}`);
  
      const response = await fetch(
        `${import.meta.env.VITE_RESGISTER_API}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address: contextWalletAddress,
            refid: urlRefid,
            transactionhash: transaction.hash,
          }),
        }
      );
      const responseData = await response.json();
  
      setRegistrationStatus(responseData);
  
      if (registrationStatus.message === "User registered successfully") {
        toast.success("User registered and logged in!");
        // Now navigate to the dashboard
        navigate("/dashboard");
      } else {
        toast(responseData.error);
      }
    } catch (error) {
      console.error("Transfer error:", error);
      toast.error("Transfer failed!");
    }
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
            (registrationStatus.message === "user does not exist" ||
            (registrationStatus.message === "User already exists" &&
              registrationStatus.error === "User already exists") ? (
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

export default Register;
