import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FruitTile from '../components/FruitTile';

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
                'http://localhost:1337/api/fruits'
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

export default FruitScreen;
