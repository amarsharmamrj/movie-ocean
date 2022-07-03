import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import moment from 'moment'
import { Box, Button, Grid, Skeleton, Typography } from '@mui/material';
import Casts from './casts';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VideoPlayDialog from './videoPlayDialog';

const Moviehighlights = (props) => {
    const params = useParams();
    const {movie} = props;
    const [open, setOpen] = React.useState(false);
    
    const mainContainer = {
        padding: '1rem 2rem',
        color: 'white',
    }
    
    const imageStyle = {
        width: '70%'
    }
    
    const backHome = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        fonSize: '1rem !important'
    }
    
    const back = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        marginLeft: '1rem !important',
        fonSize: '1rem !important'
    }
    
    const play = {
        color: 'white !important',
        backgroundColor: 'rgba(5, 129, 211, 0.76) !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginTop: '1rem !important',
        fonSize: '1rem !important'
    }

    let movieTrailerUrl = movie.videos.results.find(element => element.name.toLowerCase() === 'Official Trailer'.toLowerCase());
    console.log("##movieTrailerUrl:", movieTrailerUrl);
    return (
        <Grid item container sm={12} style={{backgroundImage: `url(${process.env.REACT_APP_IMAGE_PATH}/w780${movie.backdrop_path})`}} >
            <Grid item container sm={12}  className="high-container"  style={{background: 'linear-gradient(to bottom right, rgba(31.5, 10.5, 10.5, 1), rgba(31.5, 10.5, 10.5, 0.84))'}}>
                <Grid item sm={4}>
                    <Box  sx={{ textAlign: { sm: 'center', xs: 'center', md: 'left' } }}>
                        <Button sx={backHome} component={Link} to="/">
                            <KeyboardBackspaceIcon />
                            Back To Home
                        </Button>
                        <Button sx={back} onClick={() => window.history.back()}>
                            <KeyboardBackspaceIcon />
                            Back
                        </Button>

                    {props.dataLoaded === true ? (
                        <img 
                        src={`${process.env.REACT_APP_IMAGE_PATH}/w342${movie.poster_path}`}
                        alt={movie.original_title}
                        className="high-image"
                    />
                    ) : (
                        <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '0px' }} variant="rectangular" width={340} height={400} />
                    )}
                    
                </Box>
                </Grid>
           
                <Grid item sm={8}>
                    <Box>
                
                {props.dataLoaded === true ? (
                    <Typography variant="h2" component="h2" sx={{paddingLeft: '2rem'}} className="high-title">
                        {movie.original_title} ({new Date(movie.release_date).getFullYear()})
                    </Typography>
                ) : (
                    <Skeleton sx={{ bgcolor: 'grey.800', margin: '3rem 0 0rem 0' }} width="80%" height="50px" />
                )}

                {props.dataLoaded === true ? (
                <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="high-release">
                    {`${moment(movie.release_date).format("DD/MM/yyyy")} `} 
                    | {movie.genres != null ? movie.genres.map((genre, i) => `${genre.name}${i===movie.genres.length-1 ? ' ' : ', '}` ) : ''} 
                    | {` ${Math.round(movie.runtime / 60)}h`} {movie.runtime % 60}min
                </Typography>
                ) : (
                    <Skeleton sx={{ bgcolor: 'grey.800', marginBottom:'2rem' }} width="50%" height="25px" />
                )}
                
                {props.dataLoaded === true ? (
                <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="high-language">
                   {movie.spoken_languages != null ? movie.spoken_languages.map((language, i) =>`${language.english_name}${i===movie.spoken_languages.length-1 ? '': ', '}`) : ''}
                </Typography>
                ) : (
                    <Skeleton sx={{ bgcolor: 'grey.800', marginBottom: '1.5rem' }} width="35%" height="15px" />
                )}

                {props.dataLoaded === true ? (
                <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem',  marginBottom: '1.5rem'}} className="high-tagline">
                    {movie.tagline}
                </Typography>
                ) : (
                    <Skeleton sx={{ bgcolor: 'grey.800',  marginBottom: '1rem' }} width="40%" height="20px" />
                )}

                {props.dataLoaded === true ? (
                <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="high-overview">
                    {movie.overview}
                </Typography>
                ) : (
                    <Skeleton sx={{ bgcolor: 'grey.800',  marginBottom: '1rem' }} width="100%" height="100px" />
                )}

                </Box>

                <Box>
                    {props.dataLoaded === true ? (
                        <Button sx={play}  onClick={() => setOpen(true)}>
                            <PlayCircleOutlineIcon sx={{marginRight: '1rem'}}/>
                         Watch Trailer
                        </Button>
                    ) : (
                        <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '5px' }} variant="rectangular" width={150} height={50} />
                    )}
                </Box>

                {movieTrailerUrl != null ? (
                    <VideoPlayDialog open={open} setOpen={setOpen} name={movieTrailerUrl.name} videoKey={movieTrailerUrl.key} />
                ) : ('')}
                </Grid>

           </Grid>

        </Grid>
    );
};

export default Moviehighlights;