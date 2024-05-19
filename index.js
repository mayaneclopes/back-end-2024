const express = require("express")

const {router} = require("./router/movies")

const server = express()
server.use(express.json())

// http://127.0.0.1:8080 ou http://localhost:8080

server.get("/health", (req, res) => {
    res.json({
        status: "Running",
    })
})

server.use("/api", router)

const port = 8080
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})