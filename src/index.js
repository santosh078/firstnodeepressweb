const express = require("express");
const hbs= require("hbs");
const app = express();
const port = process.env.port || 8000;
const path= require("path");
const staticpath= path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialpath= path.join(__dirname,"../templates/partials");
app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.send("welcome to about page");
});
app.get("/weather", (req, res) => {
    res.send("welcome to weather page");
});

app.get("*", (req, res) => {
    res.send("404 error : Page not found");
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});