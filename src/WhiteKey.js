import React from 'react';
const WhiteKey = props => {
    return (
        <div className={"whiteKey"} onClick={() => props.playNote(props.note, props.octave)} onMouseEnter={() => props.playNote(props.note, props.octave)}>
            <p className={"whiteNoteText"}>{`${props.note}${props.octave}`}</p>
        </div>
    )
}
export default WhiteKey;