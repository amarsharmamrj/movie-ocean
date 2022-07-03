import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import moment from 'moment'
import { Box, Button, Grid, Typography } from '@mui/material';
import Casts from './casts';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ActorProfileCard from './actorProfileCard';
import ActorProfileImages from './actorProfileImages';

const ActorMoreInfo = (props) => {
    const params = useParams();
    const { actor } = props;
    
    const mainContainer = {
        padding: '1rem 2rem',
        color: 'white',
    }
    
    const imageStyle = {
        width: '70%'
    }
    
    const backHome = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        fonSize: '1rem !important'
    }

    return (
            <Grid item container sm={12}  className="high-container" >
                <Box>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-more-name">
                        {actor.name}
                    </Typography>

                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-more-heading">
                        Biography
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="actor-more-desc">
                        {actor.biography}
                    </Typography>
                </Box>

            </Grid>
    );
};

export default ActorMoreInfo;