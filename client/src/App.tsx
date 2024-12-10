import React from "react";
import Homepage from "./modules/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./modules/SearchResult/SearchResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
