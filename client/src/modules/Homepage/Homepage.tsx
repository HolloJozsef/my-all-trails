import React, { Suspense, useState } from "react";
import "./components/SearchBar.css";
import SearchBar from "./components/SearchBar";
import NearbyTrailList from "./components/NearbyTrailList";
import AddTrailModal from "./components/AddTrailModal";
import Spinner from "../Core/Spinner";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleGoToFavorites = () => {
    navigate("/favorites"); 
  }
  return (
    <>
      <div className="App flex flex-col justify-center items-center h-[50vh] bg-blue-100 relative">
        <SearchBar
          onSearch={(query: string) =>
            console.log("Search triggered with query:", query)
          }
        />
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleOpenModal}
        >
          +
        </button>
        <button
          className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-600 focus:outline-none"
          onClick={handleGoToFavorites}
          aria-label="View Favorite Trails"
        >
          Favorites
        </button>
      </div>

      <Suspense fallback={<Spinner />}>
        <NearbyTrailList />
      </Suspense>
      {isModalOpen &&
        createPortal(
          <AddTrailModal onClose={handleCloseModal} />,
          document.getElementById("modal-root")!
        )}
    </>
  );
};

export default Homepage;
