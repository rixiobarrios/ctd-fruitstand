import React, { useEffect, useState } from 'react';
import FruitTile from '../components/FruitTile';

const FruitScreen = () => {
    const [fruits, setFruits] = useState([]);

    const fetchFruits = async () => {
        const results = await fetch('http://localhost:1337/api/fruits');
        return await results.json();
    };

    useEffect(() => {
        fetchFruits().then((res) => {
            console.log('res', res);
            setFruits([...res]);
            // if (fruits) console.log(fruits);
        });
    }, []);
    return (
        <div>
            FruitScreen
            {fruits.map((fruit, idx) => {
                console.log(fruit);
                return <FruitTile key={idx} fruit={fruit} />;
            })}
        </div>
    );
};

export default FruitScreen;
