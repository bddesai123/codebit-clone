import React from 'react';
import Cards from '../components/Cards';
import ButtonCard from '../components/ButtonCard';
import UserTable from '../components/UserTable';
import RebirthTable from '../components/RebirthTable';

const DashBoard = () => {
  const smcards = [
    {
      title: "Staking Bonus",
      desc: "$500.00",
    },
    {
      title: "Leadership Bonus",
      desc: "$500.00",
    },
    {
      title: "Reward Bonus",
      desc: "$500.00",
    },
    {
      title: "Total Staked",
      desc: "$500.00",
    },
    {
      title: "Affiliate Bonus",
      desc: "$100.00",
    },
    {
      title: "Team Bonus",
      desc: "$100.00",
    },
    {
      title: "Total Income",
      desc: "$500.00",
    },
    {
      title: "Wallet",
      desc: "$15000.00",
    },
  ];

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
    <div className='min-h-screen'>
  

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {smcards.map((card, index) => (
          <Cards key={index} title={card.title} desc={card.desc} />
        ))}
      </div>

      <div>
        <h1 className='text-3xl text-white underline my-4 pl-8'>Pool Packages</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
          {buttons.map((button, index) => (
            <ButtonCard key={index} buttonText={button.text} />
          ))}
        </div>
      </div>

      <div>
        <h1 className='text-3xl text-white underline my-4 pl-8'>Rebirth Table</h1>
        <RebirthTable />
      </div>

      <div>
        <h1 className='text-3xl text-white underline pl-8 my-4'>User Table</h1>
        <UserTable />
      </div>
    </div>
  );
};

export default DashBoard;
