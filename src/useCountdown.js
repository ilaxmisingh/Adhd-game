import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // Ensure countDown is not negative
  countDown = Math.max(countDown, 0);

  // Calculate seconds remaining, capping at 10 seconds
  const seconds = Math.floor(countDown / 1000) % 10;

  // Set minutes to 0 for time <= 10 seconds
  const minutes = 0;

  return [minutes, seconds];
};


export { useCountdown, getReturnValues };
