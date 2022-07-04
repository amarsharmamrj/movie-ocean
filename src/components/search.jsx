import { Box, FormControl, Grid, Typography, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { getSuggestedQuery } from '@testing-library/dom';
import React from 'react';
import { useNavigate } from 'react-router';
import '../index.css';
const Search = () => {
    const history = useNavigate();

    const [query, setQuery] = React.useState('');
    const handleOnChange = (e) => {
        console.log("typing:", e.target.value)
        setQuery(e.target.value);
    }

    const handleSearch = (e) => {
        history(`/search?query=${query}`)
    }
    
    const handleMouseDown= (e) => {
        console.log("keydonwn:", e.keyCode)
        if(e.keyCode === 13){
            history(`/search?query=${query}`)
        }
    }
  
    return (
        <Grid item container sm={12} style={{padding: '1rem 0'}}>
            <Grid item sm={12} >
               <Box className="searchBox">
                   <h4 style={{color: 'white', fontSize: '2rem', textAlign: 'center', marginBlockStart: '0', marginBlockEnd: '0'}}>Search For Movies..</h4>
                    <FormControl sx={{ m: 1,width: '100%', padding: {xs: '1rem', sm: '1rem', md: '1rem 5rem 0rem 5rem'} }} variant="outlined">
                        <OutlinedInput 
                          id="outlined-adornment-password"
                          type='text'
                          color="secondary"
                          fullWidth={true}
                          onKeyDown={handleMouseDown}
                          placeholder="Search movies, series, tv.."
                        //   value={values.password}
                          onChange={handleOnChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleSearch}
                                edge="end"
                              >
                                SEARCH
                              </IconButton>
                            </InputAdornment>
                          }
                        //   label="Password"
                        />
                    </FormControl>
               </Box>
            </Grid>
        </Grid>
    );
};

export default Search;