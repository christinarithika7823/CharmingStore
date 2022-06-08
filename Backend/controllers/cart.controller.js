const Cart = require("../models/cartmodel");

const postcart = async (req, res) => {
	try {
		const cartprod = await Cart.create(req.body);
		return res.send(cartprod);
	} catch (error) {
		return res.send(error);
	}
};

const getcart = async (req, res) => {
	try {
		const getcartprods = await Cart.find().lean().exec();
		return res.send(getcartprods);
	} catch (error) {
		return res.send(error);
	}
};

module.exports = { postcart, getcart };
