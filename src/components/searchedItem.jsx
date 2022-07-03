import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';

const SearchedItem = (props) => {
    const movieStyle = {
        margin: '0.5rem',
        backgroundColor: '#545151',
        borderRadius: '5px',
    }
    const imageStyle = {
        borderRadius: '5px'
    }
    let width = '92';
    if(window.screen.width < 480){
        width = '45'
    }
    return (
        <Grid item xs={12} sm={6} sm={6}>
        <Box style={movieStyle}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              component={Link} to={`/movie/${props.item.id}`}
            >
            <Box>
                <img 
                    src={props.item.backdrop_path != null ? `${process.env.REACT_APP_IMAGE_PATH}/w${width}/${props.item.poster_path}` : `https://via.placeholder.com/${width}x138/999999/ffffff?text=No%20Poster`}
                    alt={props.item.backdrop_path}
                    style={imageStyle}
                />
            </Box>
            <Box>
                <Typography 
                    variant="h4" 
                    sx={{fontSize: {xs: '1rem', sm:'1rem', md: '2rem'
                    }, color: 'white', margin: '0 0 1rem 0'}}>
                    {props.item.title}
                </Typography>
                <Typography 
                    variant="h4" 
                    sx={{fontSize: {xs: '0.7rem', sm:'0.7rem', md: '1.1rem'}, color: 'white'}}>
                    {props.item.release_date != null ? moment(props.item.release_date).format('ll') : ''}
                </Typography>
            </Box>
            </Stack>
        </Box>
        </Grid>
    );
};

export default SearchedItem;