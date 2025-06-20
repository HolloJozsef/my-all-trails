import React from 'react';
import bicycleIconUrl from '../../../assets/bicycle-icon.svg';

const BicycleIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src={bicycleIconUrl} 
      alt="Biking icon" 
      className={className} 
    />
  );
};

export default BicycleIcon;