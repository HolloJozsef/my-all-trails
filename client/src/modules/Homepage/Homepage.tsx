import React, { useState } from "react";
import "./components/SearchBar.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import NearbyTrailList from "./components/NearbyTrailList";
import AddTrailModal from "./components/AddTrailModal";

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearch = (query: string) => {
    axios
      .get(`http://localhost:8080?message=${query}`)
      .then((response) => {
        console.log(response);
        setLoading(false); 
      })
      .catch((err) => {
        setError("Error fetching data"); 
        setLoading(false);
      });
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleOpenModal}
        >
          +
        </button>
      </div>
      <NearbyTrailList/>
      {isModalOpen && <AddTrailModal onClose={handleCloseModal} />}

      </>
      
  );
};

export default Homepage;
