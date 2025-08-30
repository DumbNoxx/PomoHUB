import { useEffect, useState } from "react";

interface useTimerReturn {
  timer: number;
  isRest: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  restarTimer: () => void;
}

export const useTimer = (time: number): useTimerReturn => {
  const [timer, setTimer] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isRest, setIsRest] = useState<boolean>(false);

  useEffect(() => {
    setTimer(time * 60)
  }, [time]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const restarTimer = () => {
    setIsRest(false);
    setTimer(time * 60);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (!isActive) return;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      setIsActive(false);
      setIsRest(true);
    }

    return () => clearInterval(interval);
  }, [isActive, timer, time, isRest]);

  return {
    timer,
    isRest,
    startTimer,
    pauseTimer,
    restarTimer,
  }
}
