const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.send("Contact us");
});

module.exports = router;
