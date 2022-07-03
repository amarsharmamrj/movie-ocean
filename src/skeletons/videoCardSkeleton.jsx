import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';

const VideoCardSkeleton = (props) => {
    const movieStyle = {
        margin: '0.5rem'
    }

    const demoArray = [1,2,3,4,5,6,7,8];

    let width = '480px';
    let height = '360px';

    return (
        <Grid item container sm={12} style={{padding: '2rem 0'}}>
            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                   {
                        demoArray.map((item) => {
                            return (
                                <Box style={movieStyle} key={item}>
                                    <Box>
                                        <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '20px' }} variant="rectangular" width={width} height={height} />
                                    </Box>
                                </Box>
                            )
                        })
                   }
               </Box>
            </Grid>
        </Grid>
    );
};

export default VideoCardSkeleton;