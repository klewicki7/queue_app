const express = require("express");
const moment = require("moment");
const { insertarEnCola, devolverColas } = require("./funcionesDB");

const routes = express.Router();

routes
  .get("/turnos", (req, res) => {
    req.getConnection((error, conn) => {
      if (error) return res.send(error);
      devolverColas(res, conn);
    });
  })

  .post("/turnos", (req, response) => {
    req.getConnection((error, conn) => {
      if (error) return response.send(error);
      conn.query(
        `SELECT * FROM clientes WHERE id = ${req.body.id}`,
        (err, resp) => {
          if (err) return response.send(err);
          //verifico si existe cliente y si no, lo inserto
          if (resp.length > 0) {
            let idCliente = req.body.id;
            insertarEnCola(error, conn, response, idCliente);
          } else {
            conn.query(
              `INSERT INTO clientes (id,nombre) VALUES(${req.body.id},'${req.body.nombre}')`,
              (err, resp) => {
                let idCliente = resp.insertId;
                insertarEnCola(error, conn, response, idCliente);
              }
            );
          }
        }
      );
    });
  })

  .put("/atendido", (req, res) => {
    req.getConnection((error, conn) => {
      if (error) return res.send(error);
      conn.query(
        `UPDATE cola_cliente SET atendido = 1 WHERE id = ${req.body.id}`,
        (err, resp) => {
          if (err) return res.send(err);
          res.send(resp);
        }
      );
    });
  })

  .get("/refresh", (req, res) => {
    req.getConnection((error, conn) => {
      if (error) return res.send(error);
      conn.query(
        `UPDATE cola_cliente 
        SET atendido = 1 
        WHERE
          (( DATE_ADD( fecha_hora, INTERVAL 3 MINUTE ) - NOW()) <= 0 AND id_cola = 2 ) 
          OR ((
            DATE_ADD( fecha_hora, INTERVAL 2 MINUTE ) - NOW()) <= 0 
          AND id_cola = 1)`,
        (err, resp) => {
          res.send(resp);
        }
      );
    });
  });

module.exports = routes;
