import { Badge, Box, Card, CardContent, CardMedia, Grid, IconButton, Typography, useMediaQuery } from "@mui/material"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOperationTime } from "../../utils/utils";

const PlaceItem = ({prop}) =>{
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? prop.images.length - 1 : prevIndex - 1)
    }
    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === prop.images.length -1? 0 : prevIndex + 1)
    }
    const handleItemClick = () => {
        navigate(`/place/${prop.id}`)
    }
    return(
        <Card 
            onClick={handleItemClick} 
            sx={{ maxWidth: '100%', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', position: isMobile?'relative':'none'}}
        >
            <CardContent sx={{ padding: isMobile? 0: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', position: isMobile?'relative':'none' }}>
                    {isMobile?
                        <CardMedia
                            component="img"
                            src={prop.profile_image_url}
                            alt="Profile_image_url"
                            sx={{ width: '100%', borderRadius: '0',height: '25vh', objectFit: 'cover'}}
                        />:
                        <CardMedia
                            component="img"
                            src={prop.profile_image_url}
                            alt="Profile_image_url"
                            sx={{ width: '20%', borderRadius: '16px',height: '80px', objectFit: 'cover'}}
                        />
                    }
                    {isMobile && (
                        <Box sx={{
                            position: 'absolute',
                            bottom: '48px',
                            right: '10px',
                            backgroundColor: '#134b8a',
                            padding: '2px 25px',
                            borderRadius: '16px',
                            border: '2px solid #134b8a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                        }}>
                            <Typography variant="body1" color="white">
                                {prop.rating}
                            </Typography>
                        </Box>
                    )}
                    <Box sx={{ width: '80%', paddingLeft: '1rem'}}>
                        <Typography variant="h6" component="div">
                            {prop.name}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CalendarMonthIcon sx={{ marginRight: '5px' }}/>
                                <Typography variant="body2">
                                    {getOperationTime(prop.operation_time)}
                                </Typography>
                            </Box>
                            {!isMobile &&(
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Badge
                                        color="primary"
                                        variant="dot"
                                        sx={{ marginRight: '8px' }}
                                    />
                                    <Typography variant="body1" color="primary">
                                        {prop.rating}
                                    </Typography>
                                </Box>
                            )}
                            
                        </Box>
                    </Box>
                </Box>
                {isMobile ? (
                    <Box sx={{ position: isMobile?'relative':'none', height: '200px', marginTop: '1rem',padding: '10px' }}>
                        <CardMedia
                            component="img"
                            src={prop.images[currentImageIndex]}
                            alt="Image caarousel"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '16px'
                            }}
                        />
                        <IconButton
                            onClick={(e)=>{
                                e.stopPropagation();
                                handlePrevClick();
                            }}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '15px',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'white',
                                borderRadius: '100%',   
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0'
                                }
                            }}
                        >
                            <ArrowBackIosIcon sx={{ fontSize: '10px' }}/>
                        </IconButton>
                        <IconButton
                            onClick={(e)=>{
                                e.stopPropagation();
                                handleNextClick();
                            }}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: '15px',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'white',
                                borderRadius: '100%',   
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0'
                                }
                            }}
                        >
                            <ArrowForwardIosIcon sx={{ fontSize: '10px' }}/>
                        </IconButton>
                    </Box>   
                ) : (
                    <Box sx={{ marginTop: '1rem' }}>
                        <Grid container>
                            {prop.images.map((imgSrc, index) =>(
                                <Grid item xs={4} key={index}>
                                    <CardMedia
                                        component="img"
                                        src={imgSrc}
                                        alt={`Image detail ${index + 1}`}
                                        sx={{
                                            borderRadius:
                                                index === 0 ? '16px 0 0 16px':
                                                index === 2 ? '0 16px 16px 0': '0',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '150px',
                                        }}
                                    />
                                </Grid>
                            ))}
                            
                        </Grid>
                    </Box>
                )}
            </CardContent>
        </Card>
    )
}

export default PlaceItem