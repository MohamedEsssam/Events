import express from "express";

const app = express();

require("./startup/config")();
require("./startup/connectDB");

app.listen(9000, () => {
  console.log("app listening on port 9000!");
});
