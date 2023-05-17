import React, { useState } from "react";
import Header from "./components/Header";
import CreateNotes from "./components/CreateNotes";
import { Box } from "@mui/material";
import { NoteObj } from "./models/Notes";
import Notes from "./components/Notes";

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteObj[]>([])

  const addNotes = (note: NoteObj) => {
    setNotes([...notes, note]);
    setNotes([note,...notes]);
  }

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id );
    setNotes(updatedNotes)
  }
  return (
    <>
     <Header />
      <Box sx={{p:5}}>
      <CreateNotes addNotes={addNotes}/>
      <Notes notes={notes} deleteNote = {deleteNote}/>
    </Box></>
     
  );
};
export default App;
