const Checkout = require("../models/checkoutmodel");

const postcheckout = async (req, res) => {
	try {
		const postcheckoutproducts = await Checkout.create(req.body);
		return res.send(postcheckoutproducts);
	} catch (error) {
		return res.send(error);
	}
};

const getcheckout = async (req, res) => {
	try {
		const getcheckoutproducts = await Checkout.find().lean().exec();
		return res.send(getcheckoutproducts);
	} catch (error) {
		return res.send(error);
	}
};

const getcheckoutproduct = async (req, res) => {
	try {
		const getproductone = await Checkout.findById(req.params.Id).lean().exec();
		return res.send(getproductone);
	} catch (error) {
		return res.send(error);
	}
};

module.exports = { postcheckout, getcheckout, getcheckoutproduct };
