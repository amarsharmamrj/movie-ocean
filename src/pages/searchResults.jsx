import { Grid, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import SearchedItem from '../components/searchedItem';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchedItemSkeleton from '../skeletons/searchedItemSkeleton';

const SearchResults = () => {
    const params = useParams();
    const [result, setResult] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    let demoArray = [1,2,3,4,5,6,7,8];
    const backHome = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        marginLeft: '0.5rem',
        fonSize: '1rem !important'
    }
    useEffect(() => {
        setDataLoaded(false);
        axios.get(`${process.env.REACT_APP_API_ROOT_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${params.query}&page=1&include_adult=true`)
        .then((result) => {
            console.log("--movie details----:", result.data.results)
            console.log("####")
            setResult(result.data.results);
            setDataLoaded(true);
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [params.id])
    return (
        <Grid container style={{marginTop: '80px'}}>
             <Grid item container sm={12}>
                 <Grid item sm={12}>
                <Box  sx={{ textAlign: { sm: 'center', xs: 'center', md: 'left' } }}>
                    <Button sx={backHome} component={Link} to="/">
                        <KeyboardBackspaceIcon />
                        Back To Home
                    </Button>
                </Box>
                </Grid>
                {
                    dataLoaded === true ? (
                        result.map((item) => <SearchedItem item={item} /> )
                    ) : (
                        demoArray.map((item) => <SearchedItemSkeleton item={item} /> )
                    ) 
                }
             </Grid>
        </Grid>
    );
};

export default SearchResults;  