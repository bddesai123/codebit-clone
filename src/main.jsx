import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Auth.jsx";
import { WalletProvider } from "./components/WalletContext.jsx";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <WalletProvider>
        <App />
        <Toaster toastOptions={{className:" bg-blue-500 p-6 text-white"}}/>
      </WalletProvider>
    </AuthProvider>
  </BrowserRouter>
);
