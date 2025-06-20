import React from 'react';
import HikerIcon from './Icons/HikerIcon';
import BicycleIcon from './Icons/BicycleIcon';
import { Trail } from '../../types/types';
import ScenicIcon from './Icons/ScenicIcon';

const iconMap: { [key in Trail['type']]: React.ComponentType<{ className?: string }> } = {
  hiking: HikerIcon,
  biking: BicycleIcon,
  scenic: ScenicIcon,
};

interface TrailTypeIconProps {
  type: Trail['type'];
  className?: string;
}

const TrailTypeIcon: React.FC<TrailTypeIconProps> = ({ type, className }) => {
  const IconComponent = iconMap[type];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
};

export default TrailTypeIcon;