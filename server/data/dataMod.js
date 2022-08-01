import data from './data_BACKUP.js';
import fs from 'fs';

// console.log(data);

const result = data.map((elem) => {
    if (elem.countInStock === 0) {
        console.log('Found a zero');
        console.log(elem);
        elem.countInStock += 1;
        console.log(elem.countInStock);
    }
    return elem;
});
// console.log(result);

fs.writeFile('./data2.js', JSON.stringify(result, null, 2), (err) => {
    err
        ? console.error('Data not written', err)
        : console.log('Data written successfully!');
});
