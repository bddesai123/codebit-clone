import { FaCircleDollarToSlot } from "react-icons/fa6";
const Smallcards = ({ title, desc }) => {
  return (
    <div className="max-w-full text-white mb-8">
      <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <div className="p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-slate-300">{desc}</p>
          </div>
          <FaCircleDollarToSlot className="text-white" size={24} /> {/* Add your desired icon here */}
        </div>
      </div>
    </div>
  );
};

export default Smallcards;
