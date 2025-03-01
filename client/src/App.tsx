import React, { Suspense } from "react";
import Homepage from "./modules/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./modules/SearchResult/SearchResult";

const TrailDetails = React.lazy(
  () => import("./modules/Homepage/components/TrailDetails")
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route
          path="/trails/:id"
          element={
            <Suspense fallback={<div>Lazy Loading TrailDetails...</div>}>
              <TrailDetails />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
