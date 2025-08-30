import { useState } from 'react';

interface useLabelBreakReturn {
  labelBreak: number;
  incrementTimeRest: () => void;
  decrementTimeRest: () => void;
}

export const useLabelBreak = (initialTime: number): useLabelBreakReturn => {
  const [labelBreak, setLabelBreak] = useState<number>(initialTime);

  const incrementTimeRest = () => setLabelBreak(currentTime => currentTime + 1);
  const decrementTimeRest = () => {
    if (labelBreak <= 1) return;
    setLabelBreak(currentTime => currentTime - 1)
  }

  return {
    labelBreak,
    incrementTimeRest,
    decrementTimeRest,
  }
}