import express from "express";

const app = express();
app.listen(9000, () => {
  console.log("app listening on port 9000!");
});
