require('dotenv').config();

const {
    DB
} = require('./src/db');

DB.connectDB().then(() => {
    console.log('DB Connected Succesfully');
}).catch((err) => {
    console.error('Failed to make database connection!');
    console.error(err);
});