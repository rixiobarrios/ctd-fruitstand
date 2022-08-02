import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FruitTile from '../components/FruitTile';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const FruitScreen = () => {
    const [fruits, setFruits] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedFruits = fruits.filter((fruit) => {
        return fruit.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const getFruits = async () => {
        try {
            const { data } = await axios.get(
                'http://localhost:5000/api/fruits'
            );
            setFruits([...data]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFruits();
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                sx={{ flexGrow: 1 }}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid item xs={12}>
                    <Paper sx={{ p: 8 }}>
                        <Grid container spacing={3}>
                            <Grid item>
                                Search:
                                <input
                                    id="search"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                <div>{searchTerm}</div>
                                {searchedFruits
                                    ? searchedFruits.map((fruit, idx) => {
                                          return (
                                              <FruitTile
                                                  key={idx}
                                                  props={fruit}
                                              />
                                          );
                                      })
                                    : fruits.map((fruit, idx) => {
                                          return (
                                              <FruitTile
                                                  key={idx}
                                                  props={fruit}
                                              />
                                          );
                                      })}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FruitScreen;
