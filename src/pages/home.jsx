import { Grid } from '@mui/material';
import React from 'react';
import Popular from '../components/popular/popular';
import WeeklyTrending from '../components/trending/weeklyTrending';

const Home = () => {
    return (
        <>
            <Grid container sx={{marginTop: '80px'}}>
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
        </>
    );
};
 
export default Home;