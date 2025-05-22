import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";


const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`absolute top-4 left-4 z-[1000] `}>
      <button
        onClick={() => navigate(-1)}
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 cursor-pointer"
      >
        <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default BackButton;
