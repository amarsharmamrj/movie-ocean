import React from 'react';
import '../index.css';
import { Box, Grid, Skeleton } from '@mui/material';

const ActorMoreInfoSkeleton = (props) => {

    return (
            <Grid item container sm={12}  className="high-container" >
                <Box sx={{width: '100%'}}>
                    <Skeleton sx={{ bgcolor: 'grey.800', margin: '3rem 0 2rem 0' }} height="70px" width="70%" />

                    <Skeleton sx={{ bgcolor: 'grey.800', margin: '0 0 2rem 0' }} height="25px" width="20%" />

                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="100%" />

                </Box>
            </Grid>
    );
};

export default ActorMoreInfoSkeleton;