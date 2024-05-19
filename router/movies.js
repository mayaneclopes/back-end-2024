const express = require("express")
const router = express.Router()

const movies = [
        {
            id: 1,
            movie: "Avenger",
            rate: 8,
        }, {
            id: 2,
            movie: "Seven",
            rate: 10,
        }, {
            id: 3,
            movie: "Fight club",
            rate: 10,
        }, { 
            id: 4,
            movie: "Interstellar",
            rate: 10,
        }
    ]

router.get("/movies", (req, res) => {
    const rate = req.query.rate ? Number(req.query.rate) : undefined
    res.json(movies.filter(movie => movie.rate === rate))
})

router.get("/movie/:id", (req, res) => {
    const id = Number(req.params.id)
    const movie = movies.find((movie) => movie.id === id)
    if (!movie) res.status(404).json({message: `Movie with id ${id} not found`})
     res.json(movie)
})

router.post("/movie", (req, res) =>{
    const body = req.body
    movies.push({
        id: movies.length + 1,
        movie: data.movie,
        rate: data.rate
    })
    movies.push(movie)
    res.status(201).json(movie)
})

module.exports = {
    router
}