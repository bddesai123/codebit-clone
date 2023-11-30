import { useState, useEffect } from "react";
import { useWallet } from "../components/WalletContext";
import { toast } from "react-hot-toast";

const MyLevelTeam = () => {
  const { walletAddress } = useWallet();
  const walletAddressString =
    typeof walletAddress === "string" ? walletAddress : "";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://forline.live/api/direct_team.php?levelteam=${walletAddressString}`
        );
        const data = await response.json();

        // Assuming data is an array of users
        setUsers(data);
      } catch (error) {
        toast.error("Error fetching data:", error.message);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, [walletAddressString]);

  return (
    <div className="min-h-screen mini-w-screen p-4 md:p-8">
      <div className="bg-gradient-to-r from-yellow-600  to-pink-600 rounded-t-lg p-4 md:p-8">
        <h2 className="text-white text-center text-xl md:text-2xl font-bold mb-2">
          My Level Team
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white rounded-b-lg overflow-hidden shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-2 md:px-4">Sr. No</th>
                <th className="py-2 px-2 md:px-4">User ID</th>
                <th className="py-2 px-2 md:px-4">Level</th>
                <th className="py-2 px-2 md:px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="py-2 text-center px-2 md:px-4">{user.srno}</td>
                  <td className="py-2 text-center px-2 md:px-4">
                    {user.userid}
                  </td>
                  <td className="py-2 text-center px-2 md:px-4">
                    {user.level}
                  </td>
                  <td className="py-2 text-center px-2 md:px-4">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyLevelTeam;
