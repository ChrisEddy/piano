import React from 'react';
const WhiteKey = props => {
    return (
        <div className={"whiteKey"} onClick={() => props.playNote(props.note, props.octave)} onMouseEnter={() => props.isHoverNotes ? props.playNote(props.note, props.octave) : null}>
            <p className={"whiteNoteText"}>{`${props.note}${props.octave}`}</p>
        </div>
    )
}
export default WhiteKey;