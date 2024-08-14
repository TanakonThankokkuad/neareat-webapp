import { Badge, Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { convertToAmPm } from "../../utils/utils";

const PlaceInformation = ({ profileImage, name, rating, address, operationTime }) =>{
    return(
        <Card 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '50%', 
                borderRadius: '16px', 
                overflow: 'hidden'
            }}
        >
            <CardMedia
                component="img"
                src={profileImage}
                alt="Profile Image"
                sx={{
                    height: '50%',
                    objectFit: 'cover',
                    borderRadius: '16px 16px 0 0',
                    width: '100%',
                    display: 'block'
                }}
            />
            <CardContent sx={{ flex: '1 0 auto', padding: '1rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Badge
                            color="primary"
                            variant="dot"
                            sx={{ marginRight: '8px' }}
                        />
                        <Typography variant="body1" color="primary">
                            {rating}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', marginTop: '2rem' }}>
                    <Typography variant="body1" sx={{ width: '20%', fontWeight: 'bold' }}>
                        Address:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {address}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', marginTop: '2rem' }}>
                    <Typography variant="body1" sx={{ width: '20%', fontWeight: 'bold' }}>
                        Opening Hour:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                        {operationTime.map(({day, time_open, time_close}) => (
                            <Typography variant="body1">
                                {day}:  {time_open === 'closed' && time_close === 'closed' ? 'Closed' : `${convertToAmPm(time_open)} - ${convertToAmPm(time_close)}`}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default PlaceInformation