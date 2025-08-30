import { useEffect, useState } from 'react';

interface useLabeSessionReturn {
  labelSession: number;
  incrementTimeSession: () => void;
  decrementTimeSession: () => void;
}

export const useLabelSession = (time: number): useLabeSessionReturn => {
  const [labelSession, setLabelSession] = useState<number>(0);
  useEffect(() => {
    setLabelSession(time)
  }, [time]);

  const incrementTimeSession = () => setLabelSession(incrementTimer => incrementTimer + 1);
  const decrementTimeSession = () => {
    if (labelSession <= 1) return;
    setLabelSession(decrementTimer => decrementTimer - 1)

  };

  return {
    labelSession,
    incrementTimeSession,
    decrementTimeSession,
  }

}
