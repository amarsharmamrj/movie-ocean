import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import moment from 'moment'
import { Box, Button, Grid, Typography } from '@mui/material';
import Casts from './casts';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ActorBasicInfo = (props) => {
    const { actor } = props;
    
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
            <Grid item sm={12}  className="high-container" >
                <Box sx={{ textAlign: { sm: 'center', xs: 'center', md: 'left' } }}>
                        <Button sx={backHome} component={Link} to="/">
                            <KeyboardBackspaceIcon />
                            Back To Home
                        </Button>
                        <Button sx={back} onClick={() => window.history.back()}>
                            <KeyboardBackspaceIcon />
                            Back
                        </Button>
                    <img 
                        src={`${process.env.REACT_APP_IMAGE_PATH}/h632${actor.profile_path}`}
                        alt={actor.name}
                        className="high-image"
                    />
                </Box>

                <Box>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-heading">
                        Known For
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-value">
                        {actor.known_for_department}
                    </Typography>

                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-heading">
                        Popularity
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-value">
                        {Math.round(actor.popularity)}%
                    </Typography>

                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-heading">
                        Gender
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-value">
                        {actor.gender === 1? 'Female' : 'Male'}
                    </Typography>

                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-heading">
                        Birthday
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-value">
                        {actor.birthday}
                    </Typography>

                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-heading">
                        Place Of Birth
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-value">
                        {actor.place_of_birth}
                    </Typography>

                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-info-heading">
                        Also Known As
                    </Typography>
                    
                    {actor.also_known_as != null ? (
                        actor.also_known_as.map((item) => {
                            return (
                                <Typography variant="h2" component="h2" sx={{padding: '0.2rem 0.5rem', fontSize: '0.8rem', borderRadius: '50px', backgroundColor: '#3a3a3a', display: 'inline-block', margin: '0.2rem 0.4rem 0.2rem 0'}} >
                                    {item}
                                </Typography>
                            )
                        })
                    ) : ''
                    }

                </Box>
            </Grid>
    );
};

export default ActorBasicInfo;