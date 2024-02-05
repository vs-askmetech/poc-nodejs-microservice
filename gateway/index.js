const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/filter", proxy("http://localhost:8003"));  //filter
app.use("/statistics", proxy("http://localhost:8002")); // statistics
app.use("/", proxy("http://localhost:8001")); // welcome

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});
