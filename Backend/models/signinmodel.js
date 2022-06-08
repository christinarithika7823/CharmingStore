const mongoose = require("mongoose");

//user Schema

const userSchema = new mongoose.Schema({
	username : { type: "String", required: false },
	email    : { type: "String", required: false },
	phone    : { type: "Number", required: false },
	password : { type: "String", required: false }
});

module.exports = mongoose.model("User", userSchema);
