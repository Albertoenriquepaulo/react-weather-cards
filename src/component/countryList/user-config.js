//https://www.youtube.com/watch?v=ouQgNAthLoQ

import React, { useState } from "react";
import Note from "./Note";

const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault();
    const id = (notes.length) ? notes[notes.length - 1].id + 1 : 0;

    setNotes([...notes, { id: id, message: input }]);
    setInput("");
}

const deleteNotes = (id, notes, setNotes) => {
    setNotes(notes.filter(note => note.id !== id))
}

export default () => {
    const [notes, setNotes] = useState([

    ]);

    const [input, setInput] = useState("")

    return (
        <div className="Notes">
            <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}>
                <input onChange={(e) => setInput(e.target.value)} value={input} />
                <button>Submit</button>
            </form>
            {notes.map((note) => (
                <Note message={note.message} id={note.id} deleteNotes={(id) => deleteNotes(id, notes, setNotes)} />
            ))}
        </div>
    )
};