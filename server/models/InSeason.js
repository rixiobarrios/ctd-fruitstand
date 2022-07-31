import mongoose from 'mongoose';

const inSeasonSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    image: {
        type: 'String',
    },
    details: {
        type: 'string',
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
        type: 'string',
    },
});

const Fruit = mongoose.model('InSeason', inSeasonSchema);

export default InSeason;
