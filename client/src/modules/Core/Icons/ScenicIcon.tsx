import React from 'react';
import scenicIconUrl from '../../../assets/scenic-icon.svg';

const ScenicIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src={scenicIconUrl} 
      alt="Scenic icon" 
      className={className} 
    />
  );
};

export default ScenicIcon;