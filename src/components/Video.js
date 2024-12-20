import react from "react";

const Video = ({vid}) => {

    return (
        <video controls>
            <source src={`/assets/videos/${vid}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default Video;