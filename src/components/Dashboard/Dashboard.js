import { Box, Button, IconButton, Typography } from "@mui/material"
import ListAltIcon from '@mui/icons-material/ListAlt';
import logo from '../../logo.png';

const Dashboard = () =>{
    return(
        <Box
            sx={{
                position: 'fixed',
                width: 100,
                height: '100vh',
                borderRadius: '0 50px 50px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderLeft: '1px solid #e0e0e0',
                borderRight: '1px solid #e0e0e0',
                borderTop: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0',
                background: '#ffffff',
                zIndex: 1200,
            }}
        >
            <Box sx={{ mb: 2}}>
                <img src={logo} alt="Logo" style={{ height: 95, borderRadius: '0 50px 0 0' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column',cursor: 'pointer' }}>
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '12px',
                        backgroundColor: '#134b8a',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                        backgroundColor: '#0f1e56', // สีพื้นหลังเมื่อวางเมาส์เหนือปุ่ม
                        },
                    }}
                >
                    <ListAltIcon />
                </Box>
                <Typography variant="caption" sx={{ textAlign: 'center' }}>
                    Place
                </Typography>
            </Box>
        </Box>
    )
}

export default Dashboard