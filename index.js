const express = require("express");
const app = express();

const saudacao = require("./saudacaoMid");

//retorno da função
app.use(saudacao("Júlia"));

app.use("/resposta", (req, res, next) => {
  console.log("Antes...");
  next();
});

// A ordem altera a chamada dos dados
app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

//recebendo parametros no body
app.post("/body", (req, res) => {
  let corpo = "";
  req.on("data", function (parte) {
    corpo += parte;
  });
  req.on("end", function () {
    res.send(corpo);
  });
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
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
