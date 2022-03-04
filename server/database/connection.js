const mongoose = require("mongoose");

const connect = async () => {
    try {
        // mongodb connection
        const con = await mongoose.connect("mongodb+srv://rubickmagus07:ZijQk6B79giQHnX@cluster0.latex.mongodb.net/test", {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect;
