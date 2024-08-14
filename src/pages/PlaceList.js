import { Box, Divider, FormControl, Grid, InputAdornment, MenuItem, Pagination, Select, TextField, Typography, useMediaQuery } from "@mui/material"
import PlaceItem from "../components/PlaceItem/PlaceItem"
import restaurentData from "../example_data.json"
import { useEffect, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';

const PlaceList = () =>{
    const [page, setPage] = useState(1);
    const [resCategories, setResCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [searchRes, setSearchRes] = useState('');

    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const itemsPerPage = 9;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    const filteredItems = restaurentData.filter((item) => {
        const matchesCategory = selectedCategory ? item.categories.includes(selectedCategory) : true;
        const matchesSearch = item.name.toLowerCase().includes(searchRes.toLowerCase()) || item.id.toString().includes(searchRes);
        return matchesCategory && matchesSearch;
    });

    
    const currentItems = filteredItems.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    
    useEffect(() => {
        const categoriesSet = new Set();

        restaurentData.forEach((item) => {
            item.categories.forEach((category) => {
                categoriesSet.add(category);
            })
        })

        setResCategories(Array.from(categoriesSet));
    },[])
    
    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleSearchChange = (event) => {
        setSearchRes(event.target.value);
    };

    if (!resCategories) {
        return <p>Loading...</p>
    }
    return(
        <Box sx={{ marginLeft: !isMobile &&'100px' }}>
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row', 
                    justifyContent: 'space-between', 
                    alignItems: isMobile?'start' : 'center',
                    margin: '2rem' 
                }}
            >
                <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{ fontWeight: 'bold', mb: isMobile? '1rem': 0 }}
                >
                    Place List
                </Typography>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: isMobile ? 'column' : 'row', 
                        alignItems: isMobile?'start' : 'center', 
                    }}
                >
                    <FormControl 
                        sx={{ 
                            minWidth: isMobile? 370 : 150, 
                            borderRadius: '20px', 
                            marginRight: '1rem', 
                            mb: isMobile? '1rem':0 
                        }}
                    >
                        <Select
                            defaultValue=""
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            displayEmpty
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                '& .MuiSelect-select': { padding: '10px' },
                            }}
                        >
                            <MenuItem value="" sx={{ color: '#9e9e9e'}}>
                                <em>Restaurent</em>
                            </MenuItem>
                            {resCategories.map((category) => (
                                <MenuItem
                                    key={category}
                                    value={category}
                                >
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {!isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mx: '1rem' }}>
                            <Divider 
                                orientation="vertical" 
                                flexItem 
                                sx={{ width: '2px', height: '2rem',alignSelf: 'center', marginRight: '1rem', background: '#134b8a' }} 
                            />
                        </Box>
                    )}
                    
                    <FormControl sx={{ borderRadius: '20px', minWidth: isMobile && 370 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search name..."
                            value={searchRes}
                            onChange={handleSearchChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                sx: { borderRadius: '20px', paddingRight: '10px', height: '40px' }
                            }}
                        />
                    </FormControl>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={4} sx={{ padding: '2rem' }}>
                    {currentItems.length !== 0 ? currentItems.map((item) => (
                        <Grid item xs={12} sm ={6} md={4} key={item.id}>
                            <PlaceItem prop={item}/>
                        </Grid>
                    )): (
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    color: '#134b8a',
                                    padding: '2rem',
                                }}
                            >
                                Not Found!
                            </Typography>
                        </Grid>
                    )}
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                        color="primary"
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default PlaceList