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
    if (!isActive) {
      document.title = "PomoHUB"
      return;
    };
    const timerMinutesTitle = Math.floor(timer / 60);
    const timerSecondsTitle = timer % 60;
    if (timer > 0) {
      document.title = `${String(timerMinutesTitle).padStart(2, "0")}:${String(timerSecondsTitle).padStart(2, "0")} - PomoHUB`;
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
