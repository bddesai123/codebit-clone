

const ButtonCard = ({ buttonText }) => {
  return (
    <div className="max-w-full max-h-6 mb-8">
      <div className="bg-gradient-to-r from-blue-900 via-black to-purple-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <div className="p-4 flex flex-col items-center">
          <button
            className="bg-gradient-to-r from-yellow-600  to-pink-600  text-white py-2 px-4 rounded-lg transition duration-300 transform hover:translate-y-[-5px] hover:shadow-md focus:outline-none"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
