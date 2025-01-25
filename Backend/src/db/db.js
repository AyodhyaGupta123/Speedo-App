const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
        // socketTimeoutMS: 45000, // Optional: Increase socket timeout
    }).then(() => {
        console.log('connected to db');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectToDb;