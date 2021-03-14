const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const query = require("./rdf-store/queries");

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Open data cw server is runnning :)")
});

app.get("/samplesize-industry", (req, res) => {
  let data = query.getSampleSizeByIndustry()
  res.send({data})
})

app.get("/industry", (req, res) => {
  let names = query.getDimensionNames("Industry");
  res.send({names})
});

app.get("/workforce", (req, res) => {
    let names = query.getDimensionNames("WorkforceSize");
    res.send({names})
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
