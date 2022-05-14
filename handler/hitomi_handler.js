const express = require('express');
const router = express.Router();

function newHitomiHandler(app, hitomiService) {
    let hitomiHandler = new HitomiHandler(hitomiService);
    router.get('/', hitomiHandler.getAll);
    app.use(router);
}

class HitomiHandler {
    constructor(hitomiService) {
        this.hitomiService = hitomiService;
    };
    getAll(request, response) {
        console.log("Start: Handler getAll Hitomi");

        let result = hitomiService.getAllService(request);

        console.log("End: Handler getAll Hitomi");

        response.status(http.StatusOK)
        return response.send([result])
    }
}

const http = {
    StatusOK: 200,
    StatusCreated: 201,
    StatusAccepted: 202,
    StatusNonAuthoritativeInformation: 203,
    StatusNoContent: 204,
    StatusBadRequest: 400,
    StatusUnauthorized: 401,
    StatusNotFound: 404,
    StatusInternalServerError: 500,
    StatusBadGateway: 502,
    StatusServiceUnavailable: 503,
    StatusGatewayTimeout: 504,
}

module.exports = {
    newHitomiHandler,
    HitomiHandler,
}