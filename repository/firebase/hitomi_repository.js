const selectAll = "";

// Model
class Hitomi {
    constructor(title, link, image, genre) {
        this.title = title;
        this.link = link;
        this.image = image;
        this.genre = genre;
    }
}

function newHitomiRepository() {
    return new HitomiRepository();
}

class HitomiRepository {
    constructor() {

    }
    getAllRepository(context) {
        console.log("Start: Repository getAllRepository in hitomi repository")

        let result = new Hitomi("Title", "Link", "Image", "Genre")

        // let result = {
        //     title: "Title",
        //     link: "Link",
        //     image: "Image",
        //     genre: "Genre",
        // };

        console.log("Data Count: ", result.length)
        console.log("End: Repository getAllRepository in hitomi repository")

        return result;
    }
}

module.exports = {
    newHitomiRepository,
    HitomiRepository,
}