const {
    Schema,
    model
} = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String,
}, {
    collection: 'UserCollection',
    timestamps: {
        createdAt: true,
        updatedAt: true
    },
});

const userModel = new model('User', userSchema);

module.exports = userModel;