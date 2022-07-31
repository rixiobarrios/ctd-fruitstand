import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FruitDetailScreen = () => {
    const [fruits, setFruits] = useState([]);
    const { id } = useParams();

    const getFruits = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000/api/fruits/${id}`
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
            FruitDetailScreen
            {fruits.length > 0 ? (
                <div>{fruits[0].name}</div>
            ) : (
                <div>That id is invalid</div>
            )}
        </div>
    );
};

export default FruitDetailScreen;
