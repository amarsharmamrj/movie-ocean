import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../index.css';
import CastCardSkeleton from '../skeletons/castCardSkeleton';
import CastCard from './castCard';

const Casts = (props) => {
    const demoArray = [1,2,3,4,5,6,7,8,9,10];
    return (
        <Grid item container sm={12} style={{padding: '2rem 0'}}>
            <Grid item sm={12}>
                <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="color-white min-padding">
                    Casts
                </Typography>
            </Grid>

            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                {
                   props.dataLoaded === true ? (
                        props.cast.map((cast) => <CastCard key={cast.id} cast={cast} /> )
                    ) : (
                        demoArray.map((item) => <CastCardSkeleton key={item} /> )
                    )
                }
               </Box>
            </Grid>
        </Grid>
    );
};

export default Casts;