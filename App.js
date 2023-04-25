const express = require("express");
const app = express();

const Aboutpage = require("./Aboutpage.js");
const Enquirypage = require("./Enquirypage.js");
const Contactpage = require("./Contactpage.js");
const Wikipage = require("./Wikipage.js");
const Blogpage = require("./Blogpage.js");
const Forumpage = require("./Forumpage.js");
const Servicepage = require("./Servicepage.js");

app.get("/ab?cd", (request, response) => {
    response.send("ab+cd");
});

app.use("/Aboutpage", Aboutpage);
app.use("/Enquirypage", Enquirypage);
app.use("/Contactpage", Contactpage);
app.use("/Wikipage", Wikipage);
app.use("/Blogpage", Blogpage);
app.use("/Forumpage", Forumpage);
app.use("/Servicepage", Servicepage);

app.listen(3200);
