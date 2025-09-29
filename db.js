import { openDB } from 'idb';

const DB_NAME = 'GameDataDB';
const STORE_NAME = 'games';
const DB_VERSION = 1;

export const getDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('timestamp', 'timestamp');
      }
    }
  });
};

export const saveGameData = async (data) => {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.store.put({ id: 'cachedData', data, timestamp: Date.now() });
  await tx.done;
};

export const getCachedGameData = async () => {
  const db = await getDB();
  return db.get(STORE_NAME, 'cachedData');
};
