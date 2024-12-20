import '../stylesheets/App.css';
import AudioPlayer from 'react-h5-audio-player';
// import BackgroundMusic from './BackgroundMusic';
// import Lover from '../assets/audio/Lover.mp3';
import CountdownTimer from './Countdown';
import Video from "./Video";
import Playback from './Playback';
import Flower from './Flower';

function App() {
  return (
    <div className="App">
        {/* <BackgroundMusic src={Lover} /> */}
        {/* <audio src={Lover} controls autoPlay loop /> */}

        {/* <AudioPlayer
                src={Lover}
                autoPlay
                loop
                showJumpControls={false}
            /> */}

      {/* <CountdownTimer /> */}

      <Playback />
      {/* <Flower /> */}
      
    </div>
  );
}

export default App;
