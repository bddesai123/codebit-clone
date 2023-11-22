import { FaCircleDollarToSlot } from "react-icons/fa6";

const Smallcards = ({ title, desc }) => {
  return (
    <div className="max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl text-white mb-4 md:mb-8">
      <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <div className="p-4 md:p-6 lg:p-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-slate-300">{desc}</p>
          </div>
          <FaCircleDollarToSlot className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Smallcards;
