import React from 'react';
import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';

const Octave = props => {
    return (
        <div className={"octaveContainer"}>
            {props.notes.map((note, index) => {
                return <WhiteKey note={note} octave={props.octave} key={index} playNote={props.playNote} {...props}/>;
            })}
            <div className={"blackKeyContainer"}>
                {props.notes.map((note, index) => {
                    if(note !== "E" && note !== "B"){
                        return <BlackKey note={note + "#"} octave={props.octave} key={index} playNote={props.playNote} {...props}/>;
                    }
                    else{
                        return <div className={"spacerKey"} key={index}></div>
                    }
                })}
            </div>
        </div>
    )
}
export default Octave;