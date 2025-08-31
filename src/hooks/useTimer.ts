import { audioPlayer } from "@/helpers";
import { useEffect, useState, useCallback } from "react";

interface UseTimerProps {
  sessionTime: number;
  breakTime: number;
}

interface UseTimerReturn {
  timeLeft: number;
  mode: 'session' | 'break';
  isActive: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export const useTimer = ({ sessionTime, breakTime }: UseTimerProps): UseTimerReturn => {
  const [isActive, setIsActive] = useState(false);

  const { audio } = audioPlayer();

  const [mode, setMode] = useState<'session' | 'break'>('session');

  const [timeLeft, setTimeLeft] = useState(sessionTime * 60);

  const start = useCallback(() => setIsActive(true), []);
  const pause = useCallback(() => setIsActive(false), []);

  const reset = useCallback(() => {
    setIsActive(false);
    setMode('session');
    setTimeLeft(sessionTime * 60);
  }, [sessionTime]);


  useEffect(() => {


    if (!isActive) {
      const newTime = (mode === 'session' ? sessionTime : breakTime) * 60;
      setTimeLeft(newTime);
    }
  }, [sessionTime, breakTime, mode]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    if (timeLeft <= 0) {
      const nextMode = mode === 'session' ? 'break' : 'session';
      const nextTime = (nextMode === 'session' ? sessionTime : breakTime) * 60;

      setMode(nextMode);
      setTimeLeft(nextTime);


      return;
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.title = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} - ${mode === 'session' ? 'Session' : 'Break'}`;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);



    if (timeLeft == 10) {
      audio.play()
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode, sessionTime, breakTime]);

  return { timeLeft, mode, isActive, start, pause, reset };
};
