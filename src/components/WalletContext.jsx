import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        try {
          // Request account access
          await window.ethereum.enable();
          const newProvider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(newProvider);

          // Set the wallet address
          const accounts = await newProvider.listAccounts();
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Error initializing provider:", error);
        }
      }
    };

    initializeProvider();
  }, []);

  const updateWalletAddress = (address) => {
    setWalletAddress(String(address));
  };

  const values = {
    walletAddress,
    updateWalletAddress,
    provider,
  };

  return <WalletContext.Provider value={values}>{children}</WalletContext.Provider>;
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
