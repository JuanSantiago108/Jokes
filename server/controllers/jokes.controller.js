const { response, json } = require("express")
const { model } = require("mongoose")
const Joke = require("./../models/jokes.model")




module.exports.addJoke = (req,res) => {
    Joke.create(req.body)
        .then(joke => res.json(joke))
        .catch(err => res.jeson(err))
}

module.exports.allJoke = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err=> res.json(err))
}


module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id })
        .then(onejoke => res.json(onejoke))
        .catch(err => res.json(err))
}

module.exports.updatedJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new :true, runValidators: true}
    )
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(mess => res.json(mess))
    .catch(err => req.json(err))
}

