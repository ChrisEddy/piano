import React, { useState } from 'react';
import './App.css';
import Octave from './Octave';
import Tone from 'tone';

function App() {

  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = ["1", "2", "3", "4", "5", "6", "7", "8"]

  const [isHoverNotes, setIsHoverNotes] = useState(false)
  const [zoom, setZoom] = useState(1000)

  const synth = new Tone.Synth().toMaster();

  const playNote = (note, octave) => {
    synth.triggerAttackRelease(note + octave, "8n");
  }

  const handleZoomChange = zoom => {
    setZoom(zoom)
    document.getElementById("keyContainer").style.zoom = zoom / 1000;
    let whiteKeys = document.getElementsByClassName('whiteKey');
    whiteKeys = Array.prototype.slice.call(whiteKeys);
    whiteKeys.forEach(whiteKey => {
      whiteKey.style.minHeight = (window.innerHeight - 150 * 2) + "px";
    })
  }

  return (
    <div className="App">
      <div id={"topToolbar"}>
        <label htmlFor="hoverNotes">Hover Notes</label>
        <input type="checkbox" name="hoverNotes" onClick={(e) => setIsHoverNotes(e.target.checked)}></input>
      </div>
      <div id={"keyContainer"}>
        {octaves.map(octave => {
          return <Octave octave={octave} notes={notes} playNote={playNote} key={octave} isHoverNotes={isHoverNotes}/>
        })}
      </div>
      <div id={"bottomToolbar"} style={{"textAlign": "center"}}>
        <label htmlFor="zoom" style={{"display": "block", "marginBottom": "10px"}}>Zoom</label>
        <input type="range" name="zoom" style={{"width": "80%"}} min="0" max="1000" value="500" step="1" value={zoom} onChange={(e) => handleZoomChange(e.target.value)}></input>
        <p>{zoom / 1000}</p>
      </div>
    </div>
  );
}

export default App;
