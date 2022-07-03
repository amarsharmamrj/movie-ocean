import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayDialog from './videoPlayDialog';

const VideoCard = (props) => {
    const [open, setOpen] = React.useState(false);
    
    const movieStyle = {
        margin: '0 0,5rem',
        backgroundColor: 'black',
        cursor: 'pointer',
        position: 'relative'
        // borderRadius: '5px'
    }
    const imageStyle = {
        // borderRadius: '5px 5px 0 0'
    }
    return (
        <>
        <Box component="button" onClick={() => setOpen(true)} style={movieStyle}>
            <Box>
                <img 
                    src={props.video.key != null ? `https://i3.ytimg.com/vi/${props.video.key}/hqdefault.jpg` : 'https://via.placeholder.com/154x232/999999/ffffff?text=No%20Profile'}
                    alt={props.video.name}
                    style={imageStyle}
                />
            </Box>
            
            {/* play button */}
            <div className="container">
                <button className="btn">
                    <span className="play"></span>
                    <span className="small-box"></span>
                </button>
            </div>
            
            {/* <h4 style={{color: 'white', margin:'0.4rem 0 0.4rem 0', padding: '0 0.5rem', fontSize: '1rem', fontWeight: '400'}}>{props.cast.character}</h4>
            <h4 style={{color: 'white', margin:'0.4rem 0 0.4rem 0', padding: '0 0.5rem', fontSize: '1rem', fontWeight: '400', fontStyle: 'italic' }}>{props.cast.name}</h4> */}
        </Box>
            <VideoPlayDialog open={open} setOpen={setOpen} name={props.video.name} videoKey={props.video.key} />

        </>
    );
};

export default VideoCard;