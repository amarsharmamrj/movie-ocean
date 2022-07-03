import { Box, Grid, Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';

const SearchedItemSkeleton = (props) => {
    const movieStyle = {
        margin: '0.5rem',
        // backgroundColor: '#545151',
        borderRadius: '5px',
    }

    return (
        <Grid item xs={12} sm={6} sm={6}>
        <Box style={movieStyle}>
                <Skeleton sx={{ bgcolor: 'grey.800' }} variant="rectangular" height="80px" width="100%" />
        </Box>
        </Grid>
    );
};

export default SearchedItemSkeleton;