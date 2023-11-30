import { ethers } from "ethers";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Deposit = () => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState(50);

  const handleTransfer = async (event) => {
    event.preventDefault(); 

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    try {
      // Request access to user's accounts
      await window.ethereum.send("eth_requestAccounts");
    } catch (error) {
      console.error("Error requesting accounts:", error);
      alert(
        "Error requesting accounts. Please make sure MetaMask is connected."
      );
      return;
    }

    const signer = provider.getSigner();

    // Replace with the actual contract address
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

    const recipient = ethers.utils.getAddress(recipientAddress);
    const amount = ethers.utils.parseUnits(transferAmount.toString(), 18); // Ensure the amount is converted to a string

    try {
      // Use the transfer function of the contract
      const transaction = await tokenContract.transfer(recipient, amount);

      // Wait for the transaction to be mined
      await transaction.wait();

      toast.success("Transfer successful!");
    } catch (error) {
      console.error("Transfer error:", error);
      toast.error("Transfer failed!");
    }
  };

  const handleAmountChange = (event) => {
    setTransferAmount(event.target.value);
  };

  const handleRecipientAddressChange = (event) => {
    setRecipientAddress(event.target.value);
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl  p-4 md:p-6 lg:p-8">
        <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-8">
          <h2 className=" text-center text-white text-2xl font-bold mb-2">
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
            <div className="mb-4">
              <label
                htmlFor="recipientAddress"
                className="block text-sm text-white mb-2"
              >
                Recipient Address
              </label>
              <input
                type="text"
                id="recipientAddress"
                value={recipientAddress}
                onChange={handleRecipientAddressChange}
                name="recipientAddress"
                placeholder="Recipient Address"
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
