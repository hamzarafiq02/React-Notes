import React from "react";
import { NoteObj } from "../models/Notes";
import { Box, Button, Card, CardContent, Typography, styled } from "@mui/material";

interface NoteProps{
    note: NoteObj
    deleteNote: (id: string) => void;
}

const StyledCard = styled(Card)`
width: 400px;
margin: 20px;
`;
const Wrapper = styled(Box)`
& > button {
    border: 1px solid #000;
    background: #fff;
    margin-top: 5px;
}
`

const Note: React.FC<NoteProps> = ( {note, deleteNote} ) => {
    return(
        <StyledCard style={{background: note.color}}>
            <CardContent>
                <Wrapper>
                    <Typography>
                        {note.title}
                    </Typography>
                    <Typography>
                        {note.details}
                    </Typography>
                    <Typography>
                        {note.date}
                    </Typography>
                    <Button variant="outlined" onClick={() => deleteNote(note.id)}> Deleted</Button>
                </Wrapper>
            </CardContent>
        </StyledCard>
    )
}
export default Note;