import React, { Suspense, useState } from "react";
import "./components/SearchBar.css";
import SearchBar from "./components/SearchBar";
import NearbyTrailList from "./components/NearbyTrailList";
import AddTrailModal from "./components/AddTrailModal";
import Spinner from "../Core/Spinner";
import { createPortal } from "react-dom";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
