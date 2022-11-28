import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  

  return (
    <p className="clock">
      <span>
        {" "}
        Dzisiaj jest{" "}
        {date.toLocaleDateString("pl", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </span>
      {","}&nbsp;
      <span>{date.toLocaleTimeString()}</span>
    </p>
  );
};

export default Clock;
