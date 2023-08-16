import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList/NotesList";
import Sidebar from "./Components/Sidebar/Sidebar";
import Search from "./Components/Search";
import Header from "./Components/Header";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Climate change refers to long-term shifts in global weather patterns due to human activities, primarily greenhouse gas emissions. Rising temperatures lead to sea-level rise, extreme weather events, and loss of biodiversity. Mitigation strategies include reducing carbon emissions, promoting renewable energy, and adopting sustainable practices.",
      date: "14/02/2023",
    },
    {
      id: nanoid(),
      text: "Regular physical activity offers numerous health benefits. Exercise improves cardiovascular health, strengthens muscles and bones, and enhances mental well-being. It reduces the risk of chronic diseases like diabetes and obesity. Incorporating even short bursts of activity into daily routines can lead to improved overall health.",
      date: "20/04/2023",
    },
    {
      id: nanoid(),
      text: "Space exploration has unveiled incredible discoveries about the universe. The Hubble Space Telescope has captured stunning images of galaxies and nebulae, while Mars rovers have provided insights into the Red Planet's geology. Continued exploration aims to uncover the mysteries of black holes, dark matter, and exoplanets.",
      date: "22/04/2023",
    },
    {
      id: nanoid(),
      text: "In today's digital age, cybersecurity is of paramount importance. With increasing reliance on technology, protecting sensitive data and systems from cyber threats is critical. Cyberattacks can lead to data breaches, financial losses, and damage to reputation. Implementing strong security measures, regular updates, and employee training can safeguard against cyber threats and ensure a secure digital environment.",
      date: "22/04/2023",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="header-container">
        <Header handleToggleDarkMode={setDarkMode} />
      </div>
      <div className="mega-container">
        <Sidebar />

        <div className="container">
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
