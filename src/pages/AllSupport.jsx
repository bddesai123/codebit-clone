import React from "react";

const AllSupport = () => {
  const supportHistory = [
    {
      srNo: 1,
      title: "Issue 1",
      message: "This is a support message.",
      reply: "Support reply goes here.",
      date: "2023-01-01",
      status: "Resolved",
    },
    {
      srNo: 2,
      title: "Issue 2",
      message: "Another support message.",
      reply: "Another support reply goes here.",
      date: "2023-02-01",
      status: "Open",
    },
    {
      srNo: 3,
      title: "Issue 3",
      message: "Yet another support message.",
      reply: "Yet another support reply goes here.",
      date: "2023-03-01",
      status: "In Progress",
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8 h-screen">
      <div className="bg-gradient-to-r from-yellow-600 to-pink-600 rounded-t-lg p-8">
        <h2 className="text-white text-center text-2xl font-bold mb-2">
          Support History
        </h2>
      </div>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white rounded-b-lg overflow-hidden shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4">SR No.</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Message</th>
              <th className="py-2 px-4">Reply</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {supportHistory.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 text-center px-4">{entry.srNo}</td>
                <td className="py-2 text-center px-4">{entry.title}</td>
                <td className="py-2 text-center px-4">{entry.message}</td>
                <td className="py-2 text-center px-4">{entry.reply}</td>
                <td className="py-2 text-center px-4">{entry.date}</td>
                <td className="py-2 text-center px-4">{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSupport;
