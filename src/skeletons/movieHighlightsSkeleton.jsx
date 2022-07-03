import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import { Box, Button, Grid, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const MoviehighlightsSkeleton = (props) => {
    const {movie} = props;
   
    const backHome = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        fonSize: '1rem !important'
    }
    
    const back = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        marginLeft: '1rem !important',
        fonSize: '1rem !important'
    }
    
    return (
        <Grid item container sm={12} >
            <Grid item container sm={12}  className="high-container"  style={{background: 'linear-gradient(to bottom right, rgba(31.5, 10.5, 10.5, 1), rgba(31.5, 10.5, 10.5, 0.84))'}}>
                <Grid item sm={4}>
                    <Box  sx={{ textAlign: { sm: 'center', xs: 'center', md: 'left' } }}>
                        <Button sx={backHome} component={Link} to="/">
                            <KeyboardBackspaceIcon />
                            Back To Home
                        </Button>
                        <Button sx={back} onClick={() => window.history.back()}>
                            <KeyboardBackspaceIcon />
                            Back
                        </Button>
                    
                        <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '0px' }} variant="rectangular" width={340} height={400} />
                    
                </Box>
                </Grid>
           
                <Grid item sm={8}>
                    <Box>
               
                    <Skeleton sx={{ bgcolor: 'grey.800', margin: '3rem 0 0rem 0' }} width="80%" height="50px" />

                    <Skeleton sx={{ bgcolor: 'grey.800', marginBottom:'2rem' }} width="50%" height="25px" />
                
                    <Skeleton sx={{ bgcolor: 'grey.800', marginBottom: '1.5rem' }} width="35%" height="15px" />

                    <Skeleton sx={{ bgcolor: 'grey.800',  marginBottom: '1rem' }} width="40%" height="20px" />

                    <Skeleton sx={{ bgcolor: 'grey.800',  marginBottom: '1rem' }} width="100%" height="100px" />

                </Box>

                <Box>
                        <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '5px' }} variant="rectangular" width={150} height={50} />
                </Box>

                </Grid>

           </Grid>

        </Grid>
    );
};

export default MoviehighlightsSkeleton;