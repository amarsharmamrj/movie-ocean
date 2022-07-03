import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moviehighlights from '../components/moviehighlights';
import Casts from '../components/casts';
import Videos from '../components/videos';
import Recommendations from '../components/recommendations'
import Similars from '../components/similars';
import CastCardSkeleton from '../skeletons/castCardSkeleton';
import RecommendCardSkeleton from '../skeletons/recommendCardSkeleton';
import SimilarCardSkeleton from '../skeletons/similarCardSkeleton';
import VideoCardSkeleton from '../skeletons/videoCardSkeleton';
import MoviehighlightsSkeleton from '../skeletons/movieHighlightsSkeleton';

const MovieDetailsPage = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        setDataLoaded(false);
        axios.get(`${process.env.REACT_APP_API_ROOT_PATH}/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=changes,casts,recommendations,images,keywords,releases,reviews,similar,videos,credits`)
        .then((result) => {
            console.log("--movie details----:", result.data)
            console.log("####")
            setMovie(result.data);
            setDataLoaded(true);
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [params.id])
    return (
        <Grid container style={{marginTop: '80px'}}>
             {dataLoaded === true ? (
                <Moviehighlights movie={movie}  dataLoaded={dataLoaded} />
            ) : (
                <MoviehighlightsSkeleton />
            )}

            {/* casts */}
            {dataLoaded === true ? (
                <Casts cast={movie.casts.cast}  dataLoaded={dataLoaded} /> 
            ) : (
                <CastCardSkeleton />
            )}

            {/* related */}
            {dataLoaded === true ? (
                <Similars similars={movie.similar.results}  dataLoaded={dataLoaded} />
            ) : (
                <SimilarCardSkeleton />
            )}

            {/* videos */}
            {dataLoaded === true ? (
                <Videos videos={movie.videos.results} dataLoaded={dataLoaded} />
            ) : (
                <VideoCardSkeleton />
            )}

            {/* recommendations */}
            {dataLoaded === true ? (
                <Recommendations recommendations={movie.recommendations.results}  dataLoaded={dataLoaded} />
            ) : (
                <RecommendCardSkeleton />
            )}
            
        </Grid>
    );
};

export default MovieDetailsPage;  