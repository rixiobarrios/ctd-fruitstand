import connectDB from './config/db.js';
import dotenv from 'dotenv';
import fruits from './data/fruitsData_BACKUP.js';
import Fruits from './models/Fruits.js';
import util from 'util';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        console.log(util.inspect(fruits, false, null, true));
        await Fruits.deleteMany();
        await Fruits.insertMany(fruits);
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        console.log('Data successfully destroyed');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
