import { Box, Typography } from "@mui/material";
import React from "react";
import { NoteObj } from "../models/Notes";
import Note from "./Note";


interface NotesProps{
    notes: NoteObj[]
    deleteNote: (id: string) => void;
}


const Notes: React.FC<NotesProps> = ({notes, deleteNote}) => {
    return(
        <Box>
            <Typography variant="h5">
                Notes
            </Typography>
            <Box>
                {  notes.map(note => (
                    <Note note={note} deleteNote={deleteNote}/>
                ))  }
            </Box>
        </Box>
    )
}

export default Notes;