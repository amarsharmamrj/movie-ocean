import { Box, Grid, Skeleton, Typography } from '@mui/material';
import React from 'react';
import '../index.css';

const CastCardSkeleton = (props) => {
    const movieStyle = {
        margin: '0.5rem'
    }

    const demoArray = [1,2,3,4,5,6,7,8];

    let width = '154px';
    let height = '231px';

    return (
        <Grid item container sm={12} style={{padding: '2rem 0'}}>
            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                   {
                        demoArray.map((item) => {
                            return (
                                <Box style={movieStyle} key={item}>
                                    <Box>
                                        <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '5px' }} variant="rectangular" width={width} height={height} />
                                        <Skeleton sx={{ bgcolor: 'grey.800' }} />
                                        <Skeleton sx={{ bgcolor: 'grey.800' }} width="70%" />
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

export default CastCardSkeleton;