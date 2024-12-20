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

	// if (!timeLeft) {
	// 	return <div className="countdown-timer">The event has passed!</div>;
	// }

	const [displayTimer, setDisplayTimer] = useState(true);

	const handleDisplayTimer = () => {
		setDisplayTimer(prev => !prev);
	}

	return (
		<div className="countdown-timer background-image">
			<h1>A little early, don't you think?</h1>
			<div class={`clock-container ${displayTimer ? "" : "hidden"}`}>
					<div class="clock-col">
						<p class="clock-day clock-timer"> {timeLeft.days} </p>
						<p class="clock-label">Days</p>
					</div>

					<div class="clock-col">
						<p class="clock-hours clock-timer"> {timeLeft.hours} </p>
						<p class="clock-label">Hours</p>
					</div>

					<div class="clock-col">
						<p class="clock-minutes clock-timer"> {timeLeft.minutes} </p>
						<p class="clock-label">Minutes</p>
					</div>

					<div class="clock-col">
						<p class="clock-seconds clock-timer"> {timeLeft.seconds} </p>
						<p class="clock-label">Seconds</p>
					</div>
				</div>
			<button onClick={handleDisplayTimer}>How about something more<span className="shiny-text">familiar</span> .</button>
		</div>
	);
};

export default CountdownTimer;
