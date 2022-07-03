import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../index.css';
import VideoCard from './videoCard';
import VideoCardSkeleton from '../skeletons/videoCardSkeleton'

const Videos = (props) => {
    const demoArray = [1,2,3,4,5,6,7,8,9,10];
  
    return (
        <Grid item container sm={12} style={{padding: '2rem 0'}}>
            <Grid item sm={12}>
                {console.log("#props.videos:", props.videos)}
                { props.videos != null ? (
                    props.videos.length !== 0 ? 
                    (
                    <Typography variant="h5" component="h5" sx={{paddingLeft: '2rem'}} className="color-white min-padding">
                        Videos
                    </Typography>
                ) : '') : ''}
            </Grid>

            <Grid item sm={12}>
               <Box className="moviesContainerStyle">
                {
                    props.dataLoaded === true ? (
                        props.videos.map((video) => <VideoCard key={video.id} video={video} /> )
                    ) : (
                        demoArray.map((item) => <VideoCardSkeleton key={item} /> )
                    )
                }
               </Box>
            </Grid>
        </Grid>
    );
};

export default Videos;