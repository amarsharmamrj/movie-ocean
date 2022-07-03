import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';
import MovieCard from '../movieCard';
import MovieCardSkeleton from '../../skeletons/movieCardSkeleton';

const WeeklyTrending = (props) => {
    const [movielist, setMovieList] = useState([]);
    
    const demoArray = [1,2,3,4,5,6,7,8,9,10];

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT_PATH}/trending/movie/${props.time}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((result) => {
          // handle success
          const data = result.data.results;
          console.log(data);
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
                    Trending of the {props.time}
                </Typography>
            </Grid>

            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                {
                    movielist.length > 0 ? (movielist.map((movie) => <MovieCard key={movie.id} movie={movie} /> )) : demoArray.map((item) => <MovieCardSkeleton key={item}/> )
                }
               </Box>
            </Grid>
        </Grid>
    );
};

export default WeeklyTrending;