const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 9000);

const dbOptions = {
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "test",
};

app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json())
app.use('/api', routes)

app.listen(app.get("port"), () => {
  console.log(`server running on port ${app.get("port")}`);
});
