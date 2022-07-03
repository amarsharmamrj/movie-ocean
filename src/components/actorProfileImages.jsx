import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../index.css';
import ActorProfileCard from './actorProfileCard';
import VideoCard from './videoCard';

const ActorProfileImages = (props) => {
  
    return (
        <Grid item container sm={12} style={{padding: '2rem 0'}}>
            <Grid item sm={12}>
                {console.log("#props.profiles:", props.profiles)}
                { props.profiles != null ? (
                    props.profiles.length !== 0 ? 
                    (
                    <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="color-white min-padding">
                        Profiles
                    </Typography>
                ) : '') : ''}
            </Grid>

            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                {
                    props.profiles != null ? (
                        props.profiles.map((profile, i) => <ActorProfileCard key={`profile${i}`} profile={profile} /> )
                    ) : ('')
                }
               </Box>
            </Grid>
        </Grid>
    );
};

export default ActorProfileImages;