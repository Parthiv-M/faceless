const mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv().env().file({ file: 'config/config.json' });

const connectDB = async () => {
    try {
        await mongoose.connect(nconf.get('mongoDBURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;