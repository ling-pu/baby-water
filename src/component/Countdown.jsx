import { useEffect, useState } from "react";

export default function Countdown({ endTime }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = new Date(endTime) - now;

    if (diff <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const days = String(Math.floor(diff / 1000 / 60 / 60 / 24)).padStart(2, "0");
    const hours = String(Math.floor((diff / 1000 / 60 / 60) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <>
    <h2>TIME SALE</h2>
      <div className="time-title">{timeLeft.days} days</div>
      <div className="time-title">{timeLeft.hours} hours</div>
      <div className="time-title">{timeLeft.minutes} minutes</div>
      {/* <div className="time-title">{timeLeft.seconds} seconds</div> */}
    </>      
  );
}