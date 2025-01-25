import React, { useState } from "react";
import "./components/SearchBar.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import NearbyTrails from "./components/NearbyTrailList";
import NearbyTrailList from "./components/NearbyTrailList";
import AddTrailModal from "./components/AddTrailModal";

const Homepage = () => {
  const [data, setData] = useState(null); // To store the fetched data
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(''); // To store any error
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearch = (query: string) => {
    axios
      .get(`http://localhost:8080?message=${query}`)
      .then((response) => {
        console.log(response);
        setData(response.data); // Save the fetched data
        setLoading(false); // Set loading to false once the request is completed
      })
      .catch((err) => {
        setError("Error fetching data"); // Handle errors
        setLoading(false);
      });
  };
  // Show loading indicator or error message
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
