import React from "react";
// import CreateArea from "./CreateArea"



function Note(props) {


    function handleclick() {
        props.onDelete(props.id)
    }


    return (
        <div id="outnotes">
            <div id="notes">
                <p>{props.Title} </p>
                <p>{props.Content}</p>
                <button className="delete" onClick={handleclick}>Delete</button>
            </div>
        </div>
    )
}


export default Note;