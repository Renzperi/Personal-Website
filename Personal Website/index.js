const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// setup static folder
app.use(express.static(path.join(__dirname, "static")));
// set view template enginge
app.set("view engine", "ejs");

// routes variables
const homeRoute = require("./routes/home");
const projectsRoute = require("./routes/projects");
const portfolioRoute = require("./routes/portfolio");
const contacts = require("./routes/contacts");
// routes
app.use("/", homeRoute);
app.use("/projects", projectsRoute);
app.use("/portfolio", portfolioRoute);
app.use("/contacts", contacts);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
