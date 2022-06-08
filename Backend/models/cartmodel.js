const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
	id         : { type: Number },
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

module.exports = mongoose.model("Cart", cartSchema);
