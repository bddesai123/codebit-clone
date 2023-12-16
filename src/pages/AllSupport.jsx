import { useState, useEffect } from "react";
import { useWallet } from "../components/WalletContext";
import { toast } from "react-hot-toast";

const AllSupport = () => {
  // const supportHistory = [
  //   {
  //     srNo: 1,
  //     title: "Issue 1",
  //     message: "This is a support message.",
  //     reply: "Support reply goes here.",
  //     date: "2023-01-01",
  //     status: "Resolved",
  //   },
  //   {
  //     srNo: 2,
  //     title: "Issue 2",
  //     message: "Another support message.",
  //     reply: "Another support reply goes here.",
  //     date: "2023-02-01",
  //     status: "Open",
  //   },
  //   {
  //     srNo: 3,
  //     title: "Issue 3",
  //     message: "Yet another support message.",
  //     reply: "Yet another support reply goes here.",
  //     date: "2023-03-01",
  //     status: "In Progress",
  //   },
  //   // Add more data as needed
  // ];

  const { walletAddress } = useWallet();
  const walletAddressString =
    typeof walletAddress === "string" ? walletAddress : "";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${walletAddressString}`
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
    <div className=" p-4 md:p-8 min-h-screen min-w-screen">
      <div className="bg-gradient-to-r from-yellow-600 to-pink-600 rounded-t-lg  p-4 md:p-8">
        <h2 className="text-white text-center text-xl md:text-2xl font-bold mb-2">
          Support History
        </h2>
      </div>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white rounded-b-lg overflow-hidden shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-2 md:px-4">SR No.</th>
              <th className="py-2 px-2 md:px-4">Title</th>
              <th className="py-2 px-2 md:px-4">Message</th>
              <th className="py-2 px-2 md:px-4">Reply</th>
              <th className="py-2 px-2 md:px-4">Date</th>
              <th className="py-2 px-2 md:px-4">Status</th>
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
  );
};

export default AllSupport;
