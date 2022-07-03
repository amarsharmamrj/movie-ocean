import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CastCard = (props) => {
    const movieStyle = {
        margin: '0.5rem',
        backgroundColor: '#5d5f60',
        borderRadius: '5px'
    }
    const imageStyle = {
        borderRadius: '5px 5px 0 0'
    }
    
    return (
        <Box style={movieStyle}>
            <Box component={Link} to={`/actor/${props.cast.id}`}>
                <img 
                    src={props.cast.profile_path != null ? `${process.env.REACT_APP_IMAGE_PATH}/w154${props.cast.profile_path}` : 'https://via.placeholder.com/154x232/999999/ffffff?text=No%20Profile'}
                    alt={props.cast.name}
                    style={imageStyle}
                />
            </Box>
            <Typography 
                variant="h4" 
                component="h4" 
                sx={{color: 'white', 
                    margin:  {xs: '0.2rem', sm: '0.2rem', md: '0.4rem'},
                    fontSize: {xs: '0.9rem', sm: '0.9rem', md: '1rem'}
                    }} 
                    >
                {props.cast.character}
            </Typography>

            <Typography 
                variant="h4" 
                component="h4" 
                sx={{color: 'white', 
                    margin: {xs: '0.4rem', sm: '0.4rem', md: '0.4rem'},
                    fontStyle: 'italic',
                    fontSize: {xs: '0.9rem', sm: '0.9rem', md: '1rem'}
                    }} 
                    >
               {props.cast.name}
            </Typography>
        </Box>
    );
};

export default CastCard;