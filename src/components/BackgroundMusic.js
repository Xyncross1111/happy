import React, { useRef, useEffect } from 'react';

const BackgroundMusic = ({ src }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        
        if (audioRef.current) {
            audioRef.current.play().catch(err => console.log('Autoplay blocked:', err));
        }
    }, []);

    return (
        <audio ref={audioRef} autoPlay loop>
            <source src={src} type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default BackgroundMusic;
