const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.get("/", (req, res) => {
  test = { data: "Wassup bruh bruh" };
  res.json(test);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
