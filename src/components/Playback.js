import React, { useState } from "react";
import Video from "./Video";
import "../stylesheets/Playback.css";

const Playback = () => {

    const video = ["test", "test2", "test3"];
    const author = ["author1", "author2", "author3"];

    const [vid, setVid] = useState(0);
    const [slideDirection, setSlideDirection] = useState("");

    const handleNext = () => {
        setSlideDirection("slide-left");
        setTimeout(() => {
            setVid((prev) => prev + 1);
            setSlideDirection("");
        }, 500);
    }

    const handlePrev = () => {
        setSlideDirection("slide-right");
        setTimeout(() => {
            setVid((prev) => prev - 1);
            setSlideDirection("");
        }, 500);
    }

    return (
        <div className="video-container">
            <div className="video-author">
                <h3>{author[vid]}</h3>
            </div>
            <div className={`video-slide ${slideDirection}`}>
                <Video vid={video[vid]} key={vid} />
            </div>
            <div className="video-toggle">
                <button onClick={handlePrev} disabled={vid === 0}>Prev</button>
                <button onClick={handleNext} disabled={vid === video.length - 1}>Next</button>
            </div>
        </div>
    );
}

export default Playback;