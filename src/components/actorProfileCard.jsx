import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayDialog from './videoPlayDialog';

const ActorProfileCard = (props) => {
   
    const imageStyle = {
        borderRadius: '5px'
    }
    return (
        <>
        <Box component="button" style={{padding: '0', margin: '0.5rem', backgroundColor: 'black'}}>
                <img 
                    src={props.profile.file_path != null ? `${process.env.REACT_APP_IMAGE_PATH}/w185${props.profile.file_path}` : 'https://via.placeholder.com/154x232/999999/ffffff?text=No%20Profile'}
                    alt={props.profile.name}
                    style={imageStyle}
                />
        </Box>
        </>
    );
};

export default ActorProfileCard;