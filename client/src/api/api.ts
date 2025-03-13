import axios from "axios";
import { Trail } from "../types/types";

const API_BASE_URL = "http://localhost:8080";

export const addTrail = async (trail: Partial<Trail>): Promise<void> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/trails`, trail, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });
    console.log(response.data); 
  } catch (error) {
    console.error("Failed to add trail:", error);
    throw error; 
  }
};

export const deleteTrail = async (trailId: string): Promise<void> => {
  axios.delete(`${API_BASE_URL}/trails/${trailId}`);
};

export async function fetchAllTrails() {
  const res = await axios.get(`${API_BASE_URL}/trails`);
  return res.data;
}

export const fetchTrail = async (id: string) => {
  const res = await axios.get(`http://localhost:8080/trails/${id}`);
  return res.data;
};
