const mongoose = require('mongoose');
const UserModel = require('./user.model');

const userData = {
    firstName: 'Name',
    lastName: 'Last Name',
    dateOfBirth: new Date(),
    email: 'test@test.com'
};

describe('User Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
            useCreateIndex: true
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validUser = new UserModel(userData);
        const savedUser = await validUser.save();
        expect(savedUser.firstName).toBeDefined();
        expect(savedUser.lastName).toBe(userData.lastName);
        expect(savedUser.dateOfBirth).toBe(userData.dateOfBirth);
        expect(savedUser.email).toBe(userData.email);
    });

});