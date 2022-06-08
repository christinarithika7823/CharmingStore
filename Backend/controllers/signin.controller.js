const User = require("../models/signinmodel");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
	const { username, email, phone, password } = req.body;
	try {
		const users = await User.create({ username, email, phone, password });
		return res.send({ users, status: "ok" });
	} catch (error) {
		return res.send({ status: "error" });
	}
};

const signin = async (req, res) => {
	const { username, password } = req.body;
	try {
		const userName = await User.findOne({ username }).lean().exec();
		if (!userName) {
			return res.send({ status: "error", message: "Invalid UserName" });
		}
		const token = jwt.sign({ _id: userName._id }, "secret", { expiresIn: "2hr" });
		return res.send({ token, userName });
	} catch (error) {
		return res.send({ status: "error", error: "Invalid credentials" });
	}
};
module.exports = { signup, signin };
