import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SimilarCard = (props) => {
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
            <Box component={Link} to={`/movie/${props.similar.id}`} onClick={() => window.scrollTo(0,0)}>
                <img 
                    src={props.similar.backdrop_path != null ? `${process.env.REACT_APP_IMAGE_PATH}/w185/${props.similar.poster_path}` : 'https://via.placeholder.com/300x170/999999/ffffff?text=No%20Poster'}
                    alt={props.similar.backdrop_path}
                    style={imageStyle}
                />
            </Box>
            <h4 style={{color: 'white', margin:'0.4rem 0 0.4rem 0', padding: '0 0.5rem', fontSize: '1rem', fontWeight: '400'}}>{props.similar.original_title}</h4>
        </Box>
    );
};

export default SimilarCard;