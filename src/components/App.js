import '../stylesheets/App.css';
import AudioPlayer from 'react-h5-audio-player';
// import BackgroundMusic from './BackgroundMusic';
import Lover from '../assets/audio/Lover.mp3';
import CountdownTimer from './Countdown';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        */}
        {/* <BackgroundMusic src={Lover} /> */}
        {/* <audio src={Lover} controls autoPlay loop /> */}

        {/* <AudioPlayer
                src={Lover}
                autoPlay
                loop
                showJumpControls={false}
            /> */}

      {/* </header> */}

      <CountdownTimer />
    </div>
  );
}

export default App;
