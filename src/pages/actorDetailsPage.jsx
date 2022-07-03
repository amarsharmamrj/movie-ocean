import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ActorBasicInfo from '../components/actorBasicInfo';
import ActorMoreInfo from '../components/actorMoreInfo';
import ActorProfileImages from '../components/actorProfileImages';
import ActorBasicInfoSkeleton from '../skeletons/actorBasicInfoSkeleton';
import ActorMoreInfoSkeleton from '../skeletons/actorMoreInfoSkeleton';
import ActorProfileImagesSkeleton from '../skeletons/actorProfileImagesSkeleton';

const ActorDetailsPage = () => {
    const params = useParams();
    const [actor, setActor] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        setDataLoaded(false);
        axios.get(`${process.env.REACT_APP_API_ROOT_PATH}/person/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=images`)
        .then((result) => {
            console.log("--actor details----:", result.data)
            setActor(result.data)
            setDataLoaded(true);
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [params.id])
    return (
        <Grid container style={{marginTop: '80px'}}>
            <Grid item container sm={4}>
                {dataLoaded === true ? (
                    <ActorBasicInfo actor={actor} />
                ) : (
                    <ActorBasicInfoSkeleton />
                )}
            </Grid>

            <Grid item container sm={8}>
                {dataLoaded === true ? (
                    <ActorMoreInfo actor={actor} />
                    ) : (
                        <ActorMoreInfoSkeleton />
                    )
                }
            </Grid>

            {
                Object.keys(actor).length > 0 && dataLoaded === true? (
                    <Grid item container sm={12}>
                        <ActorProfileImages profiles={actor.images.profiles} />
                    </Grid>
                ) : (
                    <ActorProfileImagesSkeleton />
                )
            }
            
        </Grid>
    );
};

export default ActorDetailsPage;  