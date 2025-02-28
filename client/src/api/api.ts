import { Trail } from '../types/types';

const API_BASE_URL = 'http://localhost:8080';

export const addTrail = async (trail: Partial<Trail>): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/trails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'http://localhost:3000',
    },
    body: JSON.stringify(trail),
  });
console.log(trail)
  if (!response.ok) {
    throw new Error('Failed to add trail');
  }
};

export const deleteTrail = async (trailId: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/trails/${trailId}`, {
    method: 'Delete',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'http://localhost:3000',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to add trail');
  }
};
