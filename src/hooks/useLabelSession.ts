import { useState } from 'react';

interface useLabeSessionReturn {
  labelSession: number;
  incrementTimeSession: () => void;
  decrementTimeSession: () => void;
}

export const useLabelSession = (initialTime: number): useLabeSessionReturn => {
  const [labelSession, setLabelSession] = useState<number>(initialTime);

  const incrementTimeSession = () => setLabelSession(currentTime => currentTime + 1);
  const decrementTimeSession = () => {
    if (labelSession <= 1) return;
    setLabelSession(currentTime => currentTime - 1)
  };

  return {
    labelSession,
    incrementTimeSession,
    decrementTimeSession,
  }
}