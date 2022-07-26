import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const URI = process.env.MONGO_URI;
        const conn = await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`database connected at ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
