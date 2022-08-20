const moment = require("moment");
moment.locale("es");

function insertarEnCola(error, conn, response, idCliente) {
  //traigo todos los clientes que no fueron atendidos
  conn.query(`SELECT * FROM cola_cliente WHERE atendido = 0`, (err, resp) => {
    if (resp.length > 0) {
      //si hay clientes hago logica de cual fila seria la indicada para el nuevo cliente
      let cantFilaUno = resp.filter((e) => e.id_cola === 1);
      let cantFilaDos = resp.filter((e) => e.id_cola === 2);
      let mayor = cantFilaUno.length - cantFilaDos.length >= 1;
      let id_cola = mayor ? 2 : 1;
      conn.query(
        `INSERT INTO cola_cliente (id_cliente, id_cola, fecha_hora) VALUES(${idCliente},${id_cola},NOW())`,
        (err, res) => {
          response.send(res);
        }
      );
    } else {
      // si no hay ningun cliente inserto a la fila 1 por default
      conn.query(
        `INSERT INTO cola_cliente (id_cliente, id_cola, fecha_hora) VALUES(${idCliente},1,NOW())`,
        (err, res) => {
          response.send(res);
        }
      );
    }
  });
}

function devolverColas(res, conn) {
  conn.query(
    `SELECT
       cola_cliente.*,
       clientes.nombre
     FROM
       cola_cliente 
       INNER JOIN clientes ON clientes.id = cola_cliente.id_cliente
     WHERE
       atendido = 0`,
    (err, resp) => {
      if (err) return res.send(err);
      let separadoPorIdCola = {
        filaUno: resp.filter((e) => e.id_cola === 1),
        filaDos: resp.filter((e) => e.id_cola === 2),
      };

      res.json(separadoPorIdCola);
    }
  );
}

module.exports = { insertarEnCola, devolverColas };
