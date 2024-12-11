// CountdownTimer.js
import React, { useEffect, useState } from "react";
import "../stylesheets/CountdownTimer.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-28T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div className="countdown-timer">The event has passed!</div>;
  }

  return (
    <div className="countdown-timer">

      <span className="label">A bit early, don't you think?</span>
      <div className="time-box">
        <span className="number">{timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</span>
        {/* <span className="label">Days</span> */}
      </div>
      {/* <div className="time-box">
        <span className="number">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="time-box">
        <span className="number">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="time-box">
        <span className="number">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div> */}
    </div>
  );
};

export default CountdownTimer;
