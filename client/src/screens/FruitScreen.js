import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FruitTile from '../components/FruitTile';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

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
        <div id="allFruits">
            FruitScreen
            <input id="search" value={searchTerm} onChange={handleSearch} />
            <div>{searchTerm}</div>
            {searchedFruits
                ? searchedFruits.map((fruit, idx) => {
                      return <FruitTile key={idx} props={fruit} />;
                  })
                : fruits.map((fruit, idx) => {
                      return <FruitTile key={idx} props={fruit} />;
                  })}
        </div>
    );
};

//     return (
//         <Grid sx={{ flexGrow: 1 }} container spacing={2}>
//             <Grid item xs={12}>
//                 <Grid container spacing={2}>
//                     {[0, 1, 2].map((value) => (
//                         <Grid key={value} item>
//                             <Paper
//                                 sx={{
//                                     height: 140,
//                                     width: 100,
//                                     backgroundColor: (theme) =>
//                                         theme.palette.mode === 'dark'
//                                             ? '#1A2027'
//                                             : '#fff',
//                                 }}
//                             />
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Grid>
//             <Grid item xs={12}>
//                 <Paper sx={{ p: 2 }}>
//                     <Grid container>
//                         <Grid item>
//                             FruitScreen
//                             <input
//                                 id="search"
//                                 value={searchTerm}
//                                 onChange={handleSearch}
//                             />
//                             <div>{searchTerm}</div>
//                             {searchedFruits
//                                 ? searchedFruits.map((fruit, idx) => {
//                                       return (
//                                           <FruitTile key={idx} props={fruit} />
//                                       );
//                                   })
//                                 : fruits.map((fruit, idx) => {
//                                       return (
//                                           <FruitTile key={idx} props={fruit} />
//                                       );
//                                   })}
//                         </Grid>
//                     </Grid>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
// };

export default FruitScreen;
