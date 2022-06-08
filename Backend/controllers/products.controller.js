const Product = require("../models/products.model");

const products = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		return res.send(product);
	} catch (error) {
		return res.send("error bro");
	}
};

const getproducts = async (req, res) => {
	try {
		const product = await Product.find().lean().exec();
		return res.send(product);
	} catch (error) {
		return res.send("error bro");
	}
};

const getproductsone = async (req, res) => {
	try {
		const getprodone = await Product.findById(req.params.id).lean().exec();
		return res.send(getprodone);
	} catch (error) {
		return res.send("error");
	}
};

module.exports = { products, getproducts, getproductsone };
