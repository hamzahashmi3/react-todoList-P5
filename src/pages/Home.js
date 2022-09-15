import React, { useState } from "react";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Footer from "../components/Footer";

const Home = (props) => {
  const [notes, setNotes] = useState([]);

  const addNotes = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  };

  const onDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
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
