import templateEngine from "./util/templateEngine.js";
import express from "express";
const app = express();

app.use(express.static("public"));

//Frontpage
const frontpageContent = templateEngine.readPage(
  "./public/pages/frontpage/frontpageContent.html"
);
const frontpage = templateEngine.renderPage(frontpageContent, {
  tabTitle: "HowTo - Frontpage",
});

//Express
const expressContent = templateEngine.readPage(
  "./public/pages/express/expressContent.html"
);
const expressPage = templateEngine.renderPage(expressContent, {
  tabTitle: "HowTo - Express",
  scriptLink: `    <script src="../../expressPage.js "></script>`,
});

//Nodemon
const nodemonContent = templateEngine.readPage(
  "./public/pages/nodemon/nodemonContent.html"
);
const nodemonPage = templateEngine.renderPage(nodemonContent, {
  tabTitle: "HowTo - Nodemon",
});

//Javascript
const javascriptContent = templateEngine.readPage(
  "./public/pages/javascript/javascriptContent.html"
);
const javascriptPage = templateEngine.renderPage(javascriptContent, {
  tabTitle: "HowTo - Javascript",
  scriptLink: `    <script src="../../javascriptPage.js" defer></script>`,
  cssLink: `    <link rel="stylesheet" href="../../assets/css/javascriptPage.css">`,
});

// REST API
const restAPIContent = templateEngine.readPage(
  "./public/pages/restAPI/restAPIContent.html"
);
const restAPIPage = templateEngine.renderPage(restAPIContent, {
  tabTitle: "HowTo - Rest API",
  scriptLink: `    <script src="../../restAPIPage.js "></script>`,
});

// Node.js
const nodejsContent = templateEngine.readPage(
  "./public/pages/nodejs/nodejsContent.html"
);
const nodejsPage = templateEngine.renderPage(nodejsContent, {
  tabTitle: "HowTo - Node.js",
  scriptLink: `<script src="../../nodejsPage.js"></script>`,
});

// Login
const loginContent = templateEngine.readPage(
  "./public/pages/login/loginContent.html"
);
const loginPage = templateEngine.renderPage(loginContent, {
  tabTitle: "Login",
  scriptLink: `<script src="../../loginPage.js"></script>`,
});

// Admin
const adminContent = templateEngine.readPage(
  "./public/pages/admin/adminContent.html"
);
const adminPage = templateEngine.renderPage(adminContent, {
  tabTitle: "Admin",
});

// PAGES
app.get("/frontpage", (req, res) => {
  res.send(frontpage);
});

app.get("/express", (req, res) => {
  res.send(expressPage);
});

app.get("/github", (req, res) => {
  res.send(githubPage);
});

app.get("/nodemon", (req, res) => {
  res.send(nodemonPage);
});

app.get("/javascript", (req, res) => {
  res.send(javascriptPage);
});

app.get("/restapi", (req, res) => {
  res.send(restAPIPage);
});

app.get("/nodejs", (req, res) => {
  res.send(nodejsPage);
});
app.get("/login", (req, res) => {
  res.send(loginPage);
});

app.get("/admin", (req, res) => {
  res.send(adminPage);
});

const PORT = 8081;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running on", PORT);
  }
});
