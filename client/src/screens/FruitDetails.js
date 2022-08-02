import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FruitDetailScreen = () => {
    const [fruits, setFruits] = useState([]);
    const { id } = useParams();

    const getFruits = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/${id}`);
            setFruits([...data]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFruits();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            {fruits.length > 0 ? (
                <div>
                    <img src={fruits[0].image} alt={fruits[0].name} />
                    <h2>{fruits[0].name}</h2>
                    <h4>In Stock: {fruits[0].countInStock}</h4>
                    <h4>Price: ${fruits[0].price}</h4>
                    <h4>Rating: {fruits[0].rating}</h4>
                    <h4>Item Type: {fruits[0].itemType}</h4>
                    <p>
                        <strong>Description:</strong> {fruits[0].description}
                    </p>
                </div>
            ) : (
                <div>That id is invalid</div>
            )}
        </div>
    );
};

export default FruitDetailScreen;
