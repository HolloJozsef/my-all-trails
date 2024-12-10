import React, { useState } from "react";
import "./components/SearchBar.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState(null); // To store the fetched data
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(''); // To store any error
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
    <div>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
      </div>
      <h1>Data from API</h1>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Homepage;
