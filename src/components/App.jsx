import React, { useState } from "react";
import Header from "./Header"
import CreateArea from "./CreateArea"
import Note from "./Note"
import Footer from "./Footer"
function App() {

    const [notes, setnotes] = useState([])

    function addnote(note) {

        console.log(note);
        setnotes(prevnotes => {
            return [...prevnotes, note]
        });
        // setnote("");

    }


    function deletenote(id) {
        setnotes((prevnotes) => {
            return prevnotes.filter((noteItem, index) => {
                return index !== id;
            })
        })

    }

    return (
        <div>
            <Header />
            <CreateArea onset={addnote} />
            <div id="allnotes">
                {notes.map((noteItem, index) => {
                    return (
                        < Note
                            key={index}
                            id={index}
                            Title={noteItem.title}
                            Content={noteItem.content}
                            onDelete={deletenote}
                        />
                    );
                }
                )}
            </div>


            <Footer />
        </div>
    );
}


export default App;