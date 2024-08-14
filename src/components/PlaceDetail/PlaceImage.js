import { Box, Card, CardMedia, Typography } from "@mui/material"

const PlaceImage = ({ images }) =>{
    return(
        <Card 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: 'auto', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                padding: '2rem', 
                marginBottom: '1rem' 
            }}
        >
            <Typography variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                Images
            </Typography>
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%', 
                    marginTop: '2rem' 
                }}
            >
                {images.map((image, index) => (
                    <CardMedia
                        component="img"
                        src={image}
                        alt={`Image detail ${index + 1}`}
                        sx={{
                            flex: '1',
                            borderRadius:
                                index === 0 ? '16px 16px 0 0':
                                index === 2 ? '0 0 16px 16px': '0',
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%'
                        }}
                    />
                ))}
            </Box>
        </Card>
    )
}

export default PlaceImage