import { ethers } from "ethers";
import { useState, useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useWallet } from "../components/WalletContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

const Deposit = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [transferAmount, setTransferAmount] = useState(50);
  const { walletAddress } = useWallet();
  const walletAddressString =
    typeof walletAddress === "string" ? walletAddress : "";

  useEffect(() => {
    // Redirect to login if the user is not authenticated
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleMetaMaskTasks = useCallback(async () => {
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

  const handleTransfer = async (event) => {
    event.preventDefault();

    const signer = await handleMetaMaskTasks();
    if (!signer) return;

    const tokenContract = new ethers.Contract(
      "0xE2678a381543Af153165abC3b3F88622CE315EE8",
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

    const recipientAddress = "0x8441e0d9626a92cc0Fc8fb5b9edB0e605806DEeC";
    const recipient = ethers.utils.getAddress(recipientAddress);
    const amount = ethers.utils.parseUnits(transferAmount.toString(), 18);

    try {
      const transaction = await tokenContract.transfer(recipient, amount);
      await transaction.wait();

      toast.success("Transfer successful!");

      const response = await fetch(
        `https://forline.live/api/topup.php?address=${walletAddressString}`
      );
      const data = await response.json();
      console.log(data);

      navigate("/dashboard");
    } catch (error) {
      console.error("Transfer error:", error);
      toast.error("Transfer failed!");
    }
  };

  const handleAmountChange = (event) => {
    setTransferAmount(event.target.value);
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 md:p-6 lg:p-8">
        <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
          <h2 className="text-center text-white text-2xl font-bold mb-2">
            Deposit
          </h2>
        </div>
        <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 p-6 rounded-b-lg shadow-md">
          <form onSubmit={handleTransfer}>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm text-white mb-2">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={transferAmount}
                onChange={handleAmountChange}
                name="amount"
                placeholder="50"
                className="w-full p-2 border text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-600  to-pink-600 w-full text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg transform hover:translate-y-[-5px] hover:shadow-pink-900 focus:outline-none"
            >
              Deposit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
