import axios from 'axios';
import { saveGameData, getCachedGameData } from './db';

const API_URL = import.meta.env.VITE_GAME_API;
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export const fetchData = async () => {
  const cachedEntry = await getCachedGameData();

  // If cached data exists and is less than a week old
  if (cachedEntry && Date.now() - cachedEntry.timestamp < ONE_WEEK_MS) {
    return cachedEntry.data;
  }

  // Else fetch new data from API
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    await saveGameData(data);
    return data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};
