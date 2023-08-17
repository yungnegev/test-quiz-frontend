import { useEffect, useState } from 'react';

// кастоменый хук который принимает начальное значение таймера, колбек и интервал
// возвращает текущее значение таймера
// при достижении 0 вызывает колбек

export const useTimer = (initialValue: number, callback: () => void , interval: number = 1000 ) => {
  const [timer, setTimer] = useState(initialValue);

  useEffect(() => {
    const customInterval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, interval);

    if (timer === 0) callback()

    return () => clearInterval(customInterval);
  }, [timer, interval, callback]);

  return timer;
}