import { Box, Button, InputBase, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { NoteObj } from "../models/Notes";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  & > * {
    margin-right: 20px !important;
    margin: 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    position: relative;
    bottom: -10px;
    width: 40px;
    height: 30px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;

interface CreateNoteProps{
    addNotes: (note: NoteObj) => void
}

const defaultobj = {
    id: 0,
    title: '',
    details: '',
    color: '',
    date: (new Date().toLocaleString()).toString()
}

const CreateNotes: React.FC<CreateNoteProps> = ({ addNotes }) => {
    const [note, setNote] = useState(defaultobj)
    const [error, setError] = useState<string>('');

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if(error)
        setError('');
        setNote({ ...note, [e.target.name]: e.target.value})

    }

    const onCreateNote = () => {
        if (!note.title && !note.details) {
            setError('All fields are mandatory');
            return;
        }
        addNotes({ ...note, id: uuid()})
        
    }

  return (
    <Container >
      <InputBase name="title" placeholder="Title" onChange={(e) => onValueChange(e)} value={note.title}/>
      <Box component="span">30</Box>
      <InputBase name="details" placeholder="Detail" onChange={(e) => onValueChange(e)} value={note.details}/>
      <Box component="span">250</Box>

      <InputBase 
                type="color"
                name="color"
                defaultValue={'#F5F5F5'}
                onChange={(e) => onValueChange(e)} 
                placeholder="Choose color" 
            />

      <Button variant="outlined" onClick={() => onCreateNote()}> Create Note </Button>
      {error && <Typography>{error}</Typography>}
    </Container>
  );
};
export default CreateNotes;
