import { useEffect, useState } from 'react';

interface useRestReturn {
  rest: number;
  incrementTimeRest: () => void;
  decrementTimeRest: () => void;
}

export const useRest = (time: number): useRestReturn => {
  const [rest, setRest] = useState<number>(0);

  useEffect(() => {
    setRest(time);
  }, [time]);

  const incrementTimeRest = () => setRest(incrementTime => incrementTime + 1);
  const decrementTimeRest = () => {
    if (rest <= 1) return;
    setRest(decrementTime => decrementTime - 1)
  }

  return {
    rest,
    incrementTimeRest,
    decrementTimeRest
  }
}
