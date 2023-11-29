import { createContext, useContext, useState } from "react";



const WalletContext = createContext();

export const WalletProvider = ({children}) => {

    const [walletAddress, setWalletWalletAddress] = useState("");

const updateWalletAddress =(address) =>{
    setWalletWalletAddress(String(address));
}
  return (
    <WalletContext.Provider value={{walletAddress, updateWalletAddress}}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => {
    const context = useContext(WalletContext);
    if(!context) {
        throw new Error("useWallet must be used within a WalletProvider")
    }
    return context;

}


