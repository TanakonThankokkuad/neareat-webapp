import PlaceInformation from "../components/PlaceDetail/PlaceInformation"
import PlaceImage from "../components/PlaceDetail/PlaceImage"
import { useNavigate, useParams } from "react-router-dom"
import restaurentData from "../example_data.json"
import { useEffect, useState } from "react"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PlaceDetail = () =>{
    const { id } = useParams();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const [restaurentDetail, setRestaurentDetail] = useState(null);
    const [activeTab, setActiveTab] = useState('Information');

    useEffect(() => {
        setRestaurentDetail(restaurentData.find(res => res.id === Number(id)));
    }, [id]);

    if (!restaurentDetail) {
        return <p>Loading...</p>
    }
    return(
        <Box sx={{ marginLeft: !isMobile &&'100px' }}>
            <Button 
                variant="contained" 
                startIcon={<ArrowBackIosIcon />} 
                sx={{ borderRadius: '20px', margin: '1rem' }}
                onClick={() => navigate(-1)}
            >
                BACK
            </Button>
            {isMobile ?(
                <div>
                    <Box sx={{
                        display: 'flex',
                        justifyItems: 'center',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        width: '100%',
                        backgroundColor: '#ffffff',
                        position: 'relative',
                        marginBottom: '1rem',
                        margin: '1rem',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                    }}>
                        <Box
                            onClick={() => setActiveTab('Information')}
                            sx={{
                                flex: 1,
                                textAlign: 'center',
                                padding: '8px 16px',
                                cursor: 'pointer',
                                borderRadius: '20px',
                                backgroundColor: activeTab === 'Information' ? '#134b8a' : 'transparent',
                                color: activeTab === 'Information' ? '#ffffff' : '#134b8a',
                                transition: 'background-color 0.3s, color 0.3s'
                            }}
                        >
                            <Typography variant="body1">INFORMATION</Typography>
                        </Box>
                        <Box
                            onClick={() => setActiveTab('Image')}
                            sx={{
                                flex: 1,
                                textAlign: 'center',
                                padding: '8px 16px',
                                cursor: 'pointer',
                                borderRadius: '20px',
                                backgroundColor: activeTab === 'Image' ? '#134b8a' : 'transparent',
                                color: activeTab === 'Image' ? '#ffffff' : '#134b8a',
                                transition: 'background-color 0.3s, color 0.3s'
                            }}
                        >
                            <Typography variant="body1">IMAGE</Typography>
                        </Box>
                        <Box sx={{
                                position: 'absolute',
                                height: '100%',
                                width: '50%',
                                backgroundColor: '#134b8a',
                                borderRadius: '20px',
                                transform: `translateX(${activeTab === 'Information' ? '0%' : '100%'})`,
                                transition: 'transform 0.3s',
                                zIndex: -1
                            }} 
                        />
                    </Box>
                    <Box sx={{ padding: '1rem' }}>
                        {activeTab === 'Information' ? (
                            <PlaceInformation 
                                profileImage={restaurentDetail.profile_image_url} 
                                name={restaurentDetail.name} 
                                rating={restaurentDetail.rating}
                                address={restaurentDetail.address}
                                operationTime={restaurentDetail.operation_time}
                            />
                        ) : (
                            <PlaceImage images={restaurentDetail.images} />
                        )}
                    </Box>
                </div>
            ): (
                <Box sx={{ display: 'flex', borderRadius: '10px', background: '#c4d3e9', padding: '1rem', margin: '1rem'}}>
                    <Box sx={{ flex: 3, paddingRight: '2rem' }}>
                        <PlaceInformation 
                            profileImage={restaurentDetail.profile_image_url} 
                            name={restaurentDetail.name} 
                            rating={restaurentDetail.rating}
                            address={restaurentDetail.address}
                            operationTime={restaurentDetail.operation_time}
                        />
                    </Box>
                    <Box sx={{ flex: 2 }}>
                        <PlaceImage images={restaurentDetail.images} /> 
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default PlaceDetail