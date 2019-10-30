import React from 'react';
import './App.css';
import Octave from './Octave';
import Tone from 'tone';

function App() {

  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = ["1", "2", "3", "4", "5", "6", "7", "8"]

  var synth = new Tone.Synth().toMaster();

  const playNote = (note, octave) => {
      synth.triggerAttackRelease(note + octave, "8n");
  } 

  return (
    <div className="App">
      <div id={"keyContainer"}>
        {octaves.map(octave => {
          return <Octave octave={octave} notes={notes} playNote={playNote} key={octave}/>
        })}
      </div>
    </div>
  );
}

export default App;
