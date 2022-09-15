import React, { useState } from "react";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Footer from "../components/Footer";

const Home = (props) => {
  const [notes, setNotes] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("ToDoList", JSON.stringify(items))
  }

  const addNotes = (newNote) => {
    const prevNotes = [...notes, newNote];
    setNotes(prevNotes);
    saveToLocalStorage(prevNotes)
  };

  const onDelete = (id) => {
    const prevNotes = notes.filter((noteItem, index) => {
      return index !== id;
    });
    setNotes(prevNotes)
    saveToLocalStorage(prevNotes)
  };

  return (
    <>
      <Header />
      <CreateArea addNotes={addNotes} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Home;
