import React from 'react';
import '../index.css';
import { Box, Button, Grid, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ActorBasicInfoSkeleton = (props) => {
    
    const backHome = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        fonSize: '1rem !important'
    }

    const back = {
        color: 'white !important',
        border: '2px solid rgba(5, 129, 211, 0.76) !important',
        textDecoration: 'none',
        marginBottom: '1rem !important',
        marginLeft: '1rem !important',
        fonSize: '1rem !important'
    }

    return (
            <Grid item sm={12}  className="high-container" >
                <Box sx={{ textAlign: { sm: 'center', xs: 'center', md: 'left' } }}>
                        <Button sx={backHome} component={Link} to="/">
                            <KeyboardBackspaceIcon />
                            Back To Home
                        </Button>
                        <Button sx={back} onClick={() => window.history.back()}>
                            <KeyboardBackspaceIcon />
                            Back
                        </Button>

                        <Skeleton sx={{ bgcolor: 'grey.800', borderRadius: '5px' }} variant="rectangular" width={320} height={450} />
                </Box>

                <Box>
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="30%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="25px" width="40%" />

                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="20%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="25px" width="30%" />

                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="30%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="40px" width="35%" />

                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="30%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="25px" width="40%" />

                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="20px" width="20%" />
                    <Skeleton sx={{ bgcolor: 'grey.800' }} height="50px" width="80%" />
                </Box>
            </Grid>
    );
};

export default ActorBasicInfoSkeleton;