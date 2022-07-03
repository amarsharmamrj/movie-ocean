import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const MovieCard = (props) => {
    const movieStyle = {
        margin: '0.5rem'
    }
    const imageStyle = {
        borderRadius: '5px'
    }

    let size = 'w154';
    if(window.screen.width < 480){
        size = 'w92'
    }
    

    return (
        <Box style={movieStyle}>
            {console.log("@#", window.screen.width)}
            <Box component={Link} to={`/movie/${props.movie.id}`}>
                <img 
                    src={`${process.env.REACT_APP_IMAGE_PATH}/${size}${props.movie.poster_path}`}
                    alt={props.movie.title}
                    style={imageStyle}
                />
            </Box>
            
            <Typography 
                variant="h4" 
                component="h4" 
                sx={{color: 'white', 
                    marginTop:  {xs: '0.2rem', sm: '0.2rem', md: '0.4rem'},
                    marginBottom:  {xs: '0.2rem', sm: '0.2rem', md: '0.4rem'},
                    fontSize: {xs: '0.7rem', sm: '0.2rem', md: '1rem'}
                    }} 
                    >
                {props.movie.title ?? props.movie.name}
            </Typography>

            <Typography 
                variant="h4" 
                component="h4" 
                sx={{color: 'white', 
                    marginTop: {xs: '0.4rem', sm: '0.4rem', md: '0.4rem'},
                    marginBottom: {xs: '0.2rem', sm: '0.2rem', md: '0.4rem'},
                    fontStyle: 'italic',
                    fontSize: {xs: '0.7rem', sm: '0.2rem', md: '1rem'}
                    }} 
                    >
               {moment(props.movie.release_date ?? props.movie.first_air_date).format("ll")}
            </Typography>
 
            </Box>
    );
};

export default MovieCard;