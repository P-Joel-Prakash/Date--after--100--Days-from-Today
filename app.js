const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const today = new Date();
  const futureDate = addDays(today, 100);
  const formattedDate = `${futureDate.getDate()}/${
    futureDate.getMonth() + 1
  }/${futureDate.getFullYear()}`;
  response.send(formattedDate);
});

module.exports = app;
