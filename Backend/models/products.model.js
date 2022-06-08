const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id          : { type: Number },
	name        : { type: String },
	price       : { type: Number },
	discount    : { type: String },
	image       : { type: String },
	categories  : { type: String },
	description : { type: String },
	reviews     : { type: Number },
	rating      : { type: Number },
	sizes       : { type: String }
});

module.exports = mongoose.model("Product", productSchema);
