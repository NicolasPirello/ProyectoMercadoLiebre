const express = require("express")
const app = express()
const path = require("path")

// MidelWare.

app.use(express.static(__dirname + "/public"))

// Servidor Levantado.

app.listen(3000, () => {
    console.log("Servidor Activo")
})

// Raices.

app.get("/", (req, res) => {
    const html = path.resolve(__dirname, "./views/home.html")
    res.sendFile(html)
})



