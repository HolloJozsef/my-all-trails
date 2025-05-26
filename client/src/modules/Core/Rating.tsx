import React from 'react';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: string;
  filledStar?: string;
  emptyStar?: string;
  starColorClass?: string;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  filledStar = '⭐',
  emptyStar = '☆',
  starColorClass = 'text-yellow-400',
}) => {
  const clampedRating = Math.max(0, Math.min(maxRating, rating));
  const filledStarsCount = Math.floor(clampedRating);
  const emptyStarsCount = maxRating - filledStarsCount;

  const sizeClass = {
    'sm': 'text-sm',
    'md': 'text-base',
    'lg': 'text-lg',
  }[size] || 'text-base';

  return (
    <span className={`${starColorClass} ${sizeClass}`} aria-label={`${clampedRating} out of ${maxRating} stars`}>
      {filledStar.repeat(filledStarsCount)}
      {emptyStar.repeat(emptyStarsCount)}
    </span>
  );
};

export default Rating;