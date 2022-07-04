import { Grid, Box, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchedItem from '../components/searchedItem';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchedItemSkeleton from '../skeletons/searchedItemSkeleton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SearchResults = () => { 
    const params = useParams();
    const history = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const pageValue = searchParams.get("page");
    const query = searchParams.get("query");
    console.log("pageValue", pageValue)
    console.log("query", query)

    const [result, setResult] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [disablePrev, setDisablePrev] = useState(false);
    const [disableNext, setDisableNext] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    let demoArray = [1,2,3,4,5,6,7,8];
    const backHome = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        marginLeft: '0.5rem',
        fonSize: '1rem !important'
    }
    const navigateButton = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        backgroundColor: 'rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        marginLeft: '0.5rem',
        fonSize: '1rem !important'
    }
    const disableButton = {
        color: 'white !important',
        border: '2px solid #727270 !important',
        backgroundColor: '#727270 !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        marginLeft: '0.5rem',
        fonSize: '1rem !important'
    }
    
    const handlePrevPage = () => {
        setDisableNext(false);
        if(page > 1){
            history(`?query=${query}&page=${page-1}`)
            setPage((prev) => {
                return prev - 1;
            })
        }else {
            setDisablePrev(true);
            console.log("Negative page not allowed")
        }
    }
    const handleNextPage = () => {
        setDisablePrev(false);
        if(page < totalPage){
            history(`?query=${query}&page=${page+1}`)
            setPage((prev) => {
                return prev + 1;
            })
        }else{
            setDisableNext(true);
            console.log("No Pages")
        }
    }
    useEffect(() => {
        setDataLoaded(false);
        axios.get(`${process.env.REACT_APP_API_ROOT_PATH}/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${pageValue}&include_adult=true`)
        .then((result) => {
            console.log("--movie details----:", result.data)
            setTotalPage(result.data.total_pages);
            console.log("--movie details----:", result.data.results)
            console.log("####")
            setResult(result.data.results);
            setDataLoaded(true);
        })
        .catch((error) => {
            console.log("error", error)
        })

        // setSearchParams(page);
        // history(`?page=${page}`)
        console.log("page:", page)
        console.log("page:", pageValue)
    }, [query, page])
    return (
        <Grid container style={{marginTop: '80px'}}>
             <Grid item container sm={12}>
                 <Grid item sm={12}>
                <Box  sx={{ textAlign: { sm: 'center', xs: 'center', md: 'left' } }}>
                    <Button sx={backHome} component={Link} to="/">
                        <KeyboardBackspaceIcon />
                        Back To Search
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
            
                <Grid ite xs={12} sm={12} md={12} mt={4}>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                    <Button sx={ disablePrev === true ? disableButton : navigateButton} onClick={handlePrevPage} disabled={disablePrev}>
                        <ArrowBackIosIcon />
                        Prev
                    </Button>
                    <Button sx={disableNext === true ? disableButton : navigateButton} onClick={handleNextPage} disabled={disableNext}>
                        Next
                        <ArrowForwardIosIcon />
                    </Button>
                </Stack>
                </Grid>
             </Grid>
        </Grid>
    );
};

export default SearchResults;  