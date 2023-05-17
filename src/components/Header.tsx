import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material"


const Header: React.FC = () => {
    return(
        <>
       <AppBar color="secondary">
        <Toolbar>
            <Typography>Notes App</Typography>
        </Toolbar>
       </AppBar>
        </>
    )
}

export default Header;