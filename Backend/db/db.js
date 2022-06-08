const mongoose = require("mongoose");
module.exports = () => {
	return mongoose.connect("mongodb+srv://tina:2303@cluster0.8p5ld.mongodb.net/test");
};
