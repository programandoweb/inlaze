'use client'
import { useState, useEffect } from 'react';

const useIndexedDB = (dbName) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const openDB = async () => {
      const request = indexedDB.open(dbName, 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Crear las tiendas (stores) necesarias
        if (!db.objectStoreNames.contains('config')) {
          db.createObjectStore('config', { keyPath: 'id', autoIncrement: true });
        }

        if (!db.objectStoreNames.contains('realestate')) {
          db.createObjectStore('realestate', { keyPath: 'id', autoIncrement: true });
        }

        if (!db.objectStoreNames.contains('realestateGroups')) {
          db.createObjectStore('realestateGroups', { keyPath: 'id', autoIncrement: true });
        }

        if (!db.objectStoreNames.contains('realestateProperties')) {
          db.createObjectStore('realestateProperties', { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = (event) => {
        setDb(event.target.result);
      };

      request.onerror = (event) => {
        console.error('Error opening indexedDB:', event.target.error);
      };
    };

    openDB();
  }, [dbName]);

  async function  addRecord (storeName, record){
    if (!db) return;

    const transaction = db.transaction([storeName], 'readwrite');
    const objectStore = transaction.objectStore(storeName);

    return new Promise((resolve, reject) => {
      const request = objectStore.add(record);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };

  async function getAllRecords(storeName){
    if (!db) return;

    const transaction = db.transaction([storeName], 'readonly');
    const objectStore = transaction.objectStore(storeName);

    return new Promise((resolve, reject) => {
      const request = objectStore.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };

  // Agrega una función para guardar organizeData en una tienda específica
  async function saveOrganizedData  (response) {
    if (!db) return;
    const transaction = db.transaction(['organizedData'], 'readwrite');
    const objectStore = transaction.objectStore('organizedData');
    await objectStore.clear(); // Limpiar datos antiguos
    await addRecord('organizedData', organizeData(response));
  };

  return {
    addRecord,
    getAllRecords,
    saveOrganizedData,    
  };
};

export default useIndexedDB;
