import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList/NotesList";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import AddNote from "./Components/Note/AddNote";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is first note",
      date: "15/02/2023",
    },
    {
      id: nanoid(),
      text: "This is third note",
      date: "15/02/2023",
    },
    {
      id: nanoid(),
      text: "This is fourth note",
      date: "15/02/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Sidebar />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
