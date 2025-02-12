import React from "react";
import Homepage from "./modules/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./modules/SearchResult/SearchResult";
import TrailDetails from "./modules/Homepage/components/TrailDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/trails/:id" element={<TrailDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
