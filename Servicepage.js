const express = require("express");
const router = express.Router();

const Services = [
    {
        id: 1,
        name: "Web Developer"
    },
    {
        id: 2,
        name: "Game Developer"
    },
    {
        id: 3,
        name: "Developer"
    },
    {
        id: 4,
        name: "Pen Tester"
    },
    {
        id: 5,
        name: "Data Analyst"
    },
    {
        id: 6,
        name: "Cloud architect"
    }
];

router.route("/:id").get((request, response) => {
    response.send(`Role : ${request.services.name}`);
});

router.param("id", (request, response, next, id) => {
    console.log(id);
    request.services = Services[id];
    console.log(request.services);
    next();
});
module.exports = router;

// if (request.params.service == 1) {
//     response.send("Service from App Development " + typeof request.params.service);
// } else if (request.params.service == 2) {
//     response.send("Sevice from Web development");
// } else {
//     response.send("From IT Support");
// }
// const Service_id = Number(request.params.no);
// const findService = Services.find(serve => serve.id === Service_id);

// if (findService) response.json(findService);
// else response.status(500).send("Invalid Input");
