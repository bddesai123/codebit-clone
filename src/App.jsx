import { Routes, Route } from "react-router";
import { useRef } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Sidebars from "./components/Sidebar";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import MyDirectTeam from "./pages/MyDirectTeam";
import MyLevelTeam from "./pages/MyLevelTeam";
import DirectIncome from "./pages/DirectIncome";
import LevelIncome from "./pages/LevelIncome";
import AutoPoolIncome from "./pages/AutoPoolIncome";
import NonWorkingInocme from "./pages/NonWorkingInocme";
import WorkingIncome from "./pages/WorkingIncome";
import FlushOutIncome from "./pages/FlushOutIncome";
import FlushoutTransfer from "./pages/FlushoutTransfer";
import FlushoutTransferHistory from "./pages/FlushoutTransferHistory";
import TopUp from "./pages/TopUp";
import TopUpHistory from "./pages/TopUpHistory";
import AddFunds from "./pages/AddFunds";
import FundHistory from "./pages/FundHistory";
import Withdraw from "./pages/Withdraw";
import WithdrawHistory from "./pages/WithdrawHistory";
import Support from "./pages/Support";
import AllSupport from "./pages/AllSupport";

import { FaClipboard } from "react-icons/fa";





function App() {
  const referralLinkRef = useRef(null);

  const copyToClipboard = () => {
    if (referralLinkRef.current) {
      referralLinkRef.current.select();
      document.execCommand("copy");
    }
  };
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-black to-white">
      <Sidebars />

      <div className="flex-grow">
      <div className="text-center bg-white  p-2">
        
      <label className="pr-5">Referral Link:</label>
      <input
        type="text"
        value="https://metabitclub.com/register?refid=586939"
        className="input input-bordered w-full max-w-xs"
        disabled
        ref={referralLinkRef}
      />
      <button className=" p-4 bg-gradient-to-r from-yellow-600  to-pink-600 rounded-lg text-white" onClick={copyToClipboard}>
       <span className="flex"><FaClipboard/>{" "} Copy </span>
      </button>
    </div>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          
          <Route path="/mydirectteam" element={<MyDirectTeam />} />
          <Route path="/mylevelteam" element={<MyLevelTeam />} />
          <Route path="/directincome"  element={<DirectIncome />} />
          <Route path="/levelincome"  element={<LevelIncome />} />
          <Route path="/autopoolincome"  element={<AutoPoolIncome />} />
          <Route path="/nonworkingincome"  element={<NonWorkingInocme />} />
          <Route path="/workingincome"  element={<WorkingIncome />} />
          <Route path="/flushoutincome"  element={<FlushOutIncome />} />
          <Route path="/flushouttransfer"  element={<FlushoutTransfer />} />
          <Route path="/flushouttransferhistory"  element={<FlushoutTransferHistory />} />
          <Route path="/topup"  element={<TopUp />} />
          <Route path="/topuphistory"  element={<TopUpHistory />} />
          <Route path="/addfunds"  element={<AddFunds />} />
          <Route path="/fundhistory"  element={<FundHistory />} />
          <Route path="/withdraw"  element={<Withdraw />} />
          <Route path="/withdrawhistory"  element={<WithdrawHistory />} />
          <Route path="/support" element={<Support />} />
          <Route path="/allsupport" element={<AllSupport />} />

          


          <Route path="*" element={<h1 className="text-8xl text-center text-white font-bold">Page not found</h1>} />
        </Routes>
        <Footer />
      </div>

     
    </div>
  );
}

export default App;
