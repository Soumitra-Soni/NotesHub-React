import React from "react";
import AddNote from "../Note/AddNote.js";
import Note from "../Note/Note.js";
import "./NotesList.css";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};

export default NotesList;
