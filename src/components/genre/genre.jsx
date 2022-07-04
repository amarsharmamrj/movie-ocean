import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';
import MovieCard from '../movieCard';
import MovieCardSkeleton from '../../skeletons/movieCardSkeleton';

const Genre = (props) => {
    const [movielist, setMovieList] = useState([]);
    const demoArray = [12,3,4,5,6,7,8,9,10]
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT_PATH}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${props.genre}`)
        .then((result) => {
          // handle success
          const data = result.data.results;
          console.log("genre",data);
          setMovieList(data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }, [1])

    return (
        <Grid container item sm={12}>
            <Grid item sm={12}>
                <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="color-white min-padding">
                    All time {props.genre === "28" ? "Action" : (props.genre === "16" ? "Animation" : "Comedy")}
                </Typography>
            </Grid>
 
            <Grid item sm={12}>
                <Box className="moviesContainerStyle">
                    {
                        movielist.length > 0 ? (movielist.map((movie) => <MovieCard key={movie.id} movie={movie} />)) : (demoArray.map((item) => <MovieCardSkeleton key={item} />))
                    }
                </Box>
            </Grid>
        </Grid>
    );
};

export default Genre;