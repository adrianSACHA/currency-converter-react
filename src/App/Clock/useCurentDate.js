import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [actualDate, setActualDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActualDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return actualDate;
};
