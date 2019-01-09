import { useState, useEffect } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
     console.log('effect used');
  });
  return { count, setCount };
}

export {
  useCounter,
}