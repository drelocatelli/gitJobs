import React from 'react';
import {Box, Typography, AppBar, Toolbar} from '@material-ui/core';

import basic from './basic.css';

export default() => {
    return(
        <>
            <Box>
                <AppBar position={"relative"}>
                    <Toolbar>
                        <Typography variant={"h6"} component={"div"}>Jobs</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}