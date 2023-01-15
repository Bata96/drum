import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [naziv, setNaziv] = useState("");
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playaudio(event.key.toUpperCase());
      setNaziv(event.key.toUpperCase());
    });
  }, []);

  const buttonArray = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      id: "Heater-1"
    },
    {
      id: "Heater-2",
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      id: "Heater-3",
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      id: "Heater-4",
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      id: "Clap",
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      id: "Open-HH",
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      id: "Kick-n'-Hat",
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      id: "Kick",
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      id: "Closed-HH",
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const playaudio = (selector, ime) => {
    const audio = document.getElementById(selector)
    audio.play();
    document.getElementById(ime)
    setNaziv(ime);
    audio.volume = volume;
  };

  return (
    <main id="drum-machine">
      <input max="1" min="0" step="0.01" type="range" value={volume} className="volume" onChange={(e) => setVolume(e.target.value)} ></input> 
      <div id="display">
          {naziv}
      </div>
        <div className='dugmad'>
          {buttonArray.map((buttonArray) => (<button onClick={() => {playaudio(buttonArray.text, buttonArray.id)}} className='drum-pad' id={buttonArray.id} volume={volume}>
            <audio className='clip' id={buttonArray.text} src={buttonArray.src}></audio>{buttonArray.text}</button>) )}
        </div>
    </main>
  );
}

export default App;
