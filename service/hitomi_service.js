function newHitomiService(hitomiRepository) {
    return new HitomiService(hitomiRepository);
}

class HitomiService {
    constructor(hitomiRepository) {
        this.hitomiRepository = hitomiRepository
    }
    getAllService(context) {
        console.log("Start: Service getAllService in hitomi service")

        let result = this.hitomiRepository.getAllRepository(context);

        console.log("Data Count: ", result.length)
        console.log("End: Service getAllService in hitomi service")
        return result;
    }
}

module.exports = {
    newHitomiService,
    HitomiService,
}