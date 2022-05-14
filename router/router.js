const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const { newHitomiRepository } = require('../repository/firebase/hitomi_repository')
const { newHitomiService } = require('../service/hitomi_service')
const { newHitomiHandler } = require("../handler/hitomi_handler")

function initRoute() {
    // CORS policy for response from another website
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader("Content-Type", "application/json");
        next();
    });

    // Receive JSON request body with POST and PUT
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); // POST

    // Define Repo
    hitomiRepository = newHitomiRepository();

    // Define Service
    hitomiService = newHitomiService(hitomiRepository);

    // Set Handler
    newHitomiHandler(app, hitomiService);

    // Start Server
    app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
}

module.exports = initRoute