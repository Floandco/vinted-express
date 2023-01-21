const express = require("express");
const app = express();
const cors = require("cors");



app.use(cors());

app.get("/offers", async (req, res) => {
	// const offers = require('./offers.json');	
	const offers = await offers.find();
		console.log(offers);
  	res.json(offers);       
  }
);

app.listen(process.env.PORT || 3001, () => {
    console.log("Server started 🔥");
});