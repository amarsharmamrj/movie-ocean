import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';

const MoviehighlightsSkeleton = (props) => {
    const movieStyle = {
        margin: '0.5rem'
    }
    const imageStyle = {
        borderRadius: '5px'
    }

    let width = '154px';
    let height = '231px';
    if(window.screen.width < 480){
        width = '92px';
        height = '138px';
    }
    

    return (
        <Box style={movieStyle}>
            <Box>
                <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '5px' }} variant="rectangular" width={width} height={height} />
                <Skeleton sx={{ bgcolor: 'grey.800' }} />
                <Skeleton sx={{ bgcolor: 'grey.800' }} width="70%" />
            </Box>
        </Box>
    );
};

export default MoviehighlightsSkeleton;