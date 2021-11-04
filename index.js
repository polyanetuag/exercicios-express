const express = require("express");
const app = express();

app.use("/resposta", (req, res, next) => {
  console.log("Antes...");
  next();
});

app.get("/resposta", (req, res, next) => {
  console.log("Antes...");
  //metodo middleware
  res.json({
    data: [
      { id: 3, name: "Maria", position: 1 },
      { id: 8, name: "Jonas", position: 2 },
      { id: 11, name: "Carla", position: 3 },
    ],
    count: 10,
    skip: 0,
    limit: 3,
    status: 200,
  });

  next();

  //objeto
  // res.json({
  //   name: "iPad 64Gb",
  //   price: 2957.9,
  //   discount: 0.12,
  // });
  // res.send("Estou bem");
});

app.use("/resposta", (req, res) => {
  console.log("Depois...");
});

app.listen(4000, () => {
  console.log("Backend executando...");
});
