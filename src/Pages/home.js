import React, {useEffect, useState} from 'react';
import {Box, Typography, AppBar, Toolbar, Container, TableContainer, Table, TableRow, TableHead, TableBody, TableCell, Accordion, AccordionDetails, AccordionSummary, Link} from '@material-ui/core';

import axios from 'axios';

import Navbar from '../components/navbar';

export default() => {

    const [data, setData] = useState([]);

    useEffect(() => {
        
        let webservice = "https://api.github.com/repos/devfsa/vagas/issues";
        
        axios.get(webservice)
        .then(response => {
            setData(response.data);
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        })
        
    }, []);
    
    return(
        <>
            <Navbar />
            <Box mt={5}>
                <Container>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {(data).map(i => {
                                    return(
                                        <TableRow>
                                            <TableCell>
                                                <Accordion style={{background:"#f6f6f6"}}>
                                                    <AccordionSummary>
                                                        <div>
                                                            {i.title}
                                                        </div>
                                                        <div style={{position:"absolute", right:"15px"}}>
                                                            {i.created_at}
                                                            &nbsp; | &nbsp;
                                                            Status: {i.state}
                                                            &nbsp; | &nbsp;
                                                            <Link href={i.html_url} target={"_blank"} underline={"hover"}>Show reference</Link>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{whiteSpace:"pre-line"}}>
                                                        {i.body.replace(/(<([^>]+)>)/ig, '')}
                                                        <br /><br />
                                                        <Link href={i.html_url} target={"_blank"} underline={"hover"}>Show reference</Link>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
        </>
    )
}