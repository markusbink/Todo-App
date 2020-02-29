const mongoose = require('mongoose');

// Setup Mongoose
const connectToDB = async () => {

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`MongoDB connected: ${connection.connection.host}`);
        
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectToDB;