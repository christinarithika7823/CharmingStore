const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
	id         : { type: String },
	name       : { type: String },
	price      : { type: Number },
	discount   : { type: String },
	image      : { type: String },
	categories : { type: String },
	reviews    : { type: Number },
	rating     : { type: Number },
	sizes      : { type: String },
	qty        : { type: Number }
});

module.exports = mongoose.model("checkoutSchema", checkoutSchema);
