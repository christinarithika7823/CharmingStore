const mongoose = require("mongoose");
module.exports = () => {
	return mongoose.connect("mongodb+srv://tina:2303@cluster0.g89ldyv.mongodb.net/charmingstore");
};
