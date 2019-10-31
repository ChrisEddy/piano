import React from 'react';
const BlackKey = props => {
    return (
        <div className={"blackKey"} onClick={() => props.playNote(props.note, props.octave)} onMouseEnter={() => props.isHoverNotes ? props.playNote(props.note, props.octave) : null}>
            <p className={"blackNoteText"}>{`${props.note}${props.octave}`}</p>
        </div>
    )
}
export default BlackKey;