const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.send("Welcome to Blogs by vasanthan");
});

module.exports = router;
