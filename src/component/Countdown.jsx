import { useEffect, useState } from "react";

export default function Countdown({ endTime }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = new Date(endTime) - now;

    if (diff <= 0) return { hours: "00", minutes: "00", seconds: "00" };

    const hours = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, "0");
    const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="time-sale">
      <h2>TIME SALE</h2>
      <div className="time-box">
        <div>{timeLeft.hours}</div>
        <div>{timeLeft.minutes}</div>
        <div>{timeLeft.seconds}</div>
      </div>
      <p>minutes</p>
    </div>
  );
}
