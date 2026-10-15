import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // hook state
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key); // retrieve value

    // JSON.parse to convert string to JS value and return
    return savedValue !== null ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    console.log("In use effect");
    // JSON.stringify to convert to string for storage
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // return a reusable interface similar to useState
  return [value, setValue];
};

export default useLocalStorage;
