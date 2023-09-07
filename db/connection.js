const mongoose = require('mongoose');
const DATABASE_ADDRESS = process.env.DATABASE_ADDRESS;
const database = mongoose.connect(DATABASE_ADDRESS)
database.then(() => {
    console.log('DataBase Connected');
})
    .catch(() => {
        console.log('Not connected Database');
    })

module.exports = mongoose;