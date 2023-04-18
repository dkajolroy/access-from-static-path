const express = require("express");
const app = express();
var path = require("path");
app.get("/", (req, res) => {
  res.send({ message: "Baby comeback !" });
});

// Access image from upload folder
app.use("/upload", express.static(path.join(__dirname, "/upload"))); //upload/ok.jpg
app.listen(process.env.PORT || 5000, () => {
  console.log("server is running");
});
