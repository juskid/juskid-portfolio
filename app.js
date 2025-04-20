const express = require("express");
const app = express();
const path = require("node:path");
const homeRouter = require("./routes/homeRouter");
const aboutRouter = require("./routes/aboutRouter");
const projectRouter = require("./routes/projectRouter");
const assetsPath = path.join(__dirname, "public");
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/projects", projectRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});