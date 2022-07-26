import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FruitTile from '../components/FruitTile';

const FruitScreen = () => {
    const [fruits, setFruits] = useState([]);

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
        <div>
            FruitScreen
            {fruits.map((fruit, idx) => {
                // console.log(fruit);
                return <FruitTile key={idx} fruit={fruit} />;
            })}
        </div>
    );
};

export default FruitScreen;
