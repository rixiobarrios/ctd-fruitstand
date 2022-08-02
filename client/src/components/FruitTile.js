import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
} from '@mui/material';

const FruitTile = ({ props }) => {
    const [fruit, setFruit] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setFruit({ ...props });
    }, [props]);

    const fruitPUT = async (e) => {
        e.preventDefault();
        console.log('target value');
        console.log(e.target.value);
        const body = {};
        if (e.target.value === 'add') {
            body.countInStock = fruit.countInStock + 1;
        } else if (e.target.value === 'eat') {
            body.countInStock = fruit.countInStock - 1;
        }
        const id = fruit._id;
        console.log('from id and body');
        console.log(id, body);
        const res = await axios.put(`http://localhost:5000/api/${id}/`, body);
        console.log('From fruit tile');
        console.log(res.data.countInStock);
        setFruit({ ...res.data });
        if (res.data.countInStock === 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

    //     return (
    //         <div>
    //             <img src={fruit.image} alt={fruit.name} />
    //             <h2>{fruit.name}</h2>
    //             <h3>Count: {fruit.countInStock}</h3>
    //             <button variant="contained" value="add" onClick={fruitPUT}>
    //                 Add
    //             </button>
    //             <button
    //                 id="eat-btn"
    //                 disabled={disabled}
    //                 value="eat"
    //                 onClick={fruitPUT}
    //             >
    //                 Eat
    //             </button>
    //         </div>
    //     );
    // };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Link to={`/details/${fruit._id}`}>
                    <CardMedia
                        component="img"
                        height="340"
                        image={fruit.image}
                        alt={fruit.name}
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {fruit.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Count: {fruit.countInStock}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    value="add"
                    onClick={fruitPUT}
                >
                    Add
                </Button>
            </CardActions>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    id="eat-btn"
                    disabled={disabled}
                    value="eat"
                    onClick={fruitPUT}
                >
                    Eat
                </Button>
            </CardActions>
        </Card>
    );
};

export default FruitTile;
