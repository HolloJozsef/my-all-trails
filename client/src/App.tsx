import React, { Suspense, useEffect } from "react";
import Homepage from "./modules/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrailDetailsSkeleton from "./modules/Homepage/components/TrailDetailsSkeleton";
import MapPage from "./modules/Homepage/components/MapPage";
import ErrorBoundary from "./modules/Core/ErrorBoundary";
import FavoritesPage from "./modules/Homepage/components/FavoritesPage";

const TrailDetails = React.lazy(
  () => import("./modules/Homepage/components/TrailDetails")
);

const App = () => {
  useEffect(() => {
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "modal-root";
      document.body.appendChild(modalRoot);
    }
  }, []);
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/favorites" element={<FavoritesPage />} /> 
          <Route
            path="/trails/:id"
            element={
              <Suspense fallback={<TrailDetailsSkeleton />}>
                <TrailDetails />
              </Suspense>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
