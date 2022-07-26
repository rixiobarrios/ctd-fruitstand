import mongoose from 'mongoose';

const fruitsSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    image: {
        type: 'String',
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    },
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

export default Fruit;
