import express from "express";

const app = express();
const PORT = 8000;
app.use(middleware1);
function middleware1(req, res, next) {
  console.log("first middleware");
  next();
}
function middleware2(req, res, next) {
  console.log("second middleware");
  next();
}
app.get("/", middleware2, (req, res) => {
  console.log("home");
  res.send(`<h1>Homepage</h1>`);
});
app.get("/about", (req, res) => {
  console.log("Nirbhay is here");
  res.send(`<h1>Nirbhay is here</h1>`);
});
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
