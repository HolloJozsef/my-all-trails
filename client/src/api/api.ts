import { Trail } from '../types/types';

const API_BASE_URL = 'http://localhost:8080';

export const addTrail = async (trail: Partial<Trail>): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/trails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trail),
  });

  if (!response.ok) {
    throw new Error('Failed to add trail');
  }
};
