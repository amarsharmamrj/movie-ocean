import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../index.css';
import RecommendationCard from './recommendationCard';
import RecommentCardSkeleton from '../skeletons/recommendCardSkeleton'

const Recommendations = (props) => {
    const demoArray = [1,2,3,4,5,6,7,8,9,10];
  
    return (
        <Grid item container sm={12} style={{padding: '2rem 0'}}>
            <Grid item sm={12}>
                <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="color-white min-padding">
                    Recommendations
                </Typography>
            </Grid>

            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                {props.dataLoaded === true ? (
                        props.recommendations.map((recommendation) => <RecommendationCard key={recommendation.id} recommendation={recommendation} /> )
                    ) : (
                        demoArray.map((item) => <RecommentCardSkeleton key={item} /> )
                    )
                }
               </Box>
            </Grid>
        </Grid>
    );
};

export default Recommendations;