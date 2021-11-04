const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Estou bem");
});

app.listen(4000, () => {
  console.log("Backend executando...");
});
