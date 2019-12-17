const mongoose = require('mongoose');

exports.connectDB = function () {
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
};

exports.closeDB = async function () {
    return mongoose.connection.close();
};