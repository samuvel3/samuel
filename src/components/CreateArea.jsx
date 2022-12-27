import React, { useState } from "react"




function CreateArea(props) {

    const [note, setnote] = useState({

        title: "",
        content: ""
    })

    function handlechange(event) {

        const { value, name } = event.target;

        setnote(previnput => {
            return {
                ...previnput,
                [name]: value
            }
        });

    }
    function add(event) {
        props.onset(note)

        setnote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }


    return (
        <div id="outcreatearea">
            <form id="createarea">
                <input name="title" placeholder="Title" onChange={handlechange} value={note.title} />
                <textarea name="content" value={note.content} placeholder="Content ..." rows="3" onChange={handlechange} />
                <button className="add" onClick={add}>add</button>
            </form>
        </div>
    )
}


export default CreateArea;

