const http = require("http");
const express = require("express");
const server = express();
const router = require("./routes");
const path = require("path");
const { SENDER } = process.env;
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", SENDER);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.json());
if (process.env.NODE_ENV !== "production") {
  const morgan = require("morgan");
  server.use(morgan("dev"));
}

server.use("/", router);

module.exports = server;
