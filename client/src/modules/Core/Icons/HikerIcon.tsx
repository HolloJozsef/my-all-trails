import React from 'react';
import hikerIconUrl from '../../../assets/hiker-icon.svg';

const HikerIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src={hikerIconUrl} 
      alt="Hiking icon" 
      className={className} 
    />
  );
};

export default HikerIcon;