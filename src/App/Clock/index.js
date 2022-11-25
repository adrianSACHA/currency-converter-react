import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
  const [theDate, setTheDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTheDate(new Date());
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
        {theDate.toLocaleDateString("pl", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </span>
      {","}&nbsp;
      <span>{theDate.toLocaleTimeString()}</span>
    </p>
  );
};

export default Clock;
