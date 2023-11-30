import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useWallet } from "../components/WalletContext";
import Cards from "../components/Cards";
import ButtonCard from "../components/ButtonCard";
import UserTable from "../components/UserTable";
import RebirthTable from "../components/RebirthTable";

const DashBoard = () => {
  const { walletAddress } = useWallet();
  const walletAddressString =
    typeof walletAddress === "string" ? walletAddress : "";
  const [smcards, setSmCards] = useState([
    {
      title: "Total Staked",
      desc: "",
      apiEndpoint: `https://forline.live/api/direct_team.php?total=${walletAddressString}`,
      dataKey: "totalincome",
    },
    {
      title: "Pool Income",
      desc: "",
      apiEndpoint: `https://forline.live/api/direct_team.php?poolincome=${walletAddressString}`,
      dataKey: "poolincome",
    },
    {
      title: "Total Direct Bonus",
      desc: "",
      apiEndpoint: `https://forline.live/api/direct_team.php?totaldir=${walletAddressString}`,
      dataKey: "totalteam",
    },
    {
      title: "Total Level",
      desc: "",
      apiEndpoint: `https://forline.live/api/direct_team.php?totallevel=${walletAddressString}`,
      dataKey: "levelteam",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedCards = await Promise.all(
          smcards.map(async (card) => {
            const response = await fetch(card.apiEndpoint);
            const data = await response.text();

           

            // Attempt to parse the JSON string
            let parsedData;
            try {
              parsedData = JSON.parse(data);
            } catch (parseError) {
              toast.error(
                `Error parsing JSON for ${card.title}:`,
                parseError
              );
              parsedData = {};
            }

            const descValue = parsedData[card.dataKey];
            if (descValue === undefined) {
              toast.warn(`Unexpected data structure for ${card.title}.`);
            }

            // Convert the descValue to a string
            const desc = String(descValue || "No data available");
            return {
              ...card,
              desc,
            };
          })
        );

        setSmCards(updatedCards);
      } catch (error) {
        toast.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const buttons = [
    { text: "Buy S6 1st package (10$)" },
    { text: "Buy S6 2nd package (20$)" },
    { text: "Buy S6 3rd package (30$)" },
    { text: "Buy S6 4th package (40$)" },
    { text: "Buy S6 5th package (40$)" },
    { text: "Buy S6 6th package (40$)" },
    { text: "Buy S6 7th package (40$)" },
    { text: "Buy S6 8th package (40$)" },
    { text: "Buy S6 9th package (40$)" },
  ];

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {smcards.map((card, index) => (
          <Cards key={index} title={card.title} desc={card.desc} />
        ))}
      </div>

      <div>
        <h1 className="text-3xl text-white underline my-4 pl-8">
          Pool Packages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
          {buttons.map((button, index) => (
            <ButtonCard key={index} buttonText={button.text} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-white underline my-4 pl-8">
          Rebirth Table
        </h1>
        <RebirthTable />
      </div>

      <div>
        <h1 className="text-3xl text-white underline pl-8 my-4">User Table</h1>
        <UserTable />
      </div>
    </div>
  );
};

export default DashBoard;
