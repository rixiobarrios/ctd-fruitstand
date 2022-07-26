import mongoose from 'mongoose';

const fruitsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    details: {
        type: String,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    },
    rating: {
        type: Number,
    },
    description: {
        type: String,
    },
    itemType: {
        type: String,
        enum: ['Fruit', 'Veggie', 'InSeason', 'Basket'],
    },
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

export default Fruit;
