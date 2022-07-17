const JokeController= require("./../controllers/jokes.controller")




module.exports = (app) => {
    app.get("/api/jokes", JokeController.allJoke)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.post("/api/jokes", JokeController.addJoke)
    app.put("/api/jokes/:id", JokeController.updatedJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}