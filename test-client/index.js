const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.status(200).sendFile(filePath);
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
