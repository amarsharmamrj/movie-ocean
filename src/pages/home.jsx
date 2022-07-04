import { Grid } from '@mui/material';
import React from 'react';
import Genre from '../components/genre/genre';
import Popular from '../components/popular/popular';
import Search from '../components/search';
import WeeklyTrending from '../components/trending/weeklyTrending';

const Home = () => {
    return (
        <>
            <Grid container sx={{marginTop: '4rem'}}>
                <Search />
            </Grid>

            <Grid container sx={{marginTop: {xs: '2rem', sm: '2rem', sm: '3rem'}}}>
                <Popular type="movie" />
            </Grid>
            <Grid container sx={{marginTop: {xs: '2rem', sm: '2rem', sm: '3rem'}}}>
                <Popular type="tv" />
            </Grid>

            <Grid container sx={{marginTop: {xs: '2rem', sm: '2rem', sm: '3rem'}}}>
                <WeeklyTrending time="day" />
            </Grid>
            <Grid container sx={{marginTop: {xs: '2rem', sm: '2rem', sm: '3rem'}}}>
                <WeeklyTrending time="week" />
            </Grid>

            <Grid container sx={{marginTop: {xs: '2rem', sm: '2rem', sm: '3rem'}}}>
                <Genre genre="16" />
            </Grid>
            <Grid container sx={{marginTop: {xs: '2rem', sm: '2rem', sm: '3rem'}}}>
                <Genre genre="28" />
            </Grid>
            <Grid container sx={{marginTop: {xs: '2rem', sm: '2rem', sm: '3rem'}}}>
                <Genre genre="35" />
            </Grid>
        </>
    );
};
 
export default Home;