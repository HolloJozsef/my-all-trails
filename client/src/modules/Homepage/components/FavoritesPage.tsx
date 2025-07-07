import React from 'react';
import { useFavoritesStore } from '../../../store/favoriteStore';
import NearbyTrailCard from './NearbyTrailCard';
import BackButton from '../../Core/BackButton';

const FavoritesPage: React.FC = () => {
  const favoriteTrailsData = useFavoritesStore(state => state.favoriteTrailsData);
  const removeFavorite = useFavoritesStore(state => state.removeFavorite);

  const handleDeleteFromFavorites = (id: number) => {
    removeFavorite(id); 
  };


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center sm:py-12">
          <BackButton/>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">My Favorite Trails</h1>
      {favoriteTrailsData.length === 0 ? (
        <p className="text-gray-600 text-lg">You haven't added any favorite trails yet!</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {favoriteTrailsData.map((trail) => (
            <NearbyTrailCard
              key={trail.id}
              trail={trail}
              onDelete={handleDeleteFromFavorites} // This will just remove from favorites, not server delete
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;