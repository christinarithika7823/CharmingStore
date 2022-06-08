const express = require("express");
const cors = require("cors");
const app = express();
const connect = require("./db/db");

app.use(express.json());
app.use(cors());

const { products, getproducts, getproductsone } = require("./controllers/products.controller");

app.post("/products", products);
app.get("/getproducts", getproducts);
app.get("/getproductsone/:id", getproductsone);

const { signup, signin } = require("./controllers/signin.controller");
app.post("/signup", signup);
app.post("/signin", signin);

const { postcart, getcart } = require("./controllers/cart.controller");
app.post("/postcart", postcart);
app.get("/getcart", getcart);

const { postcheckout, getcheckout, getcheckoutproduct } = require("./controllers/checkout.controller");
app.post("/postcheckout", postcheckout);
app.get("/getcheckout", getcheckout);
app.get("/getcheckoutproduct", getcheckoutproduct);

app.listen(process.env.PORT || 8000, async () => {
	try {
		await connect();
		console.log("Server Running ON 8000");
	} catch (error) {
		console.log(error);
	}
});
