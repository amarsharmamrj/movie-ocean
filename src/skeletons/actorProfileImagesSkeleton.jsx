import { Box, Grid, Skeleton, Typography } from '@mui/material';
import React from 'react';
import '../index.css';

const ActorProfileImagesSkeleton = (props) => {
    const demoArray = [1,2,3,4,5,6,7,8]
    return (
        <Grid item container sm={12} style={{padding: '2rem 0'}}>
            <Grid item sm={12}>
                    <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="color-white min-padding">
                        Profiles
                    </Typography>
            </Grid>

            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                {
                    demoArray.map((item) => {
                        return (
                            <Skeleton  key={item} sx={{ bgcolor: 'grey.800', margin: '0 0.5rem' }} height="350px" width="150px" />
                        )
                    } )
                }
               </Box>
            </Grid>
        </Grid>
    );
};

export default ActorProfileImagesSkeleton;