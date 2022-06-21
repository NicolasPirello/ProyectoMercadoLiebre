const express = require("express")
const app = express()
const path = require("path")

// Middleware.

app.use(express.static(__dirname + "/public"))

// Servidor Levantado.

/* app.listen(3000, () => {
    console.log("Servidor Activo")
}) */

app.listen(process.env.PORT || 3000, () => {console.log("Servidor Activo")})

// Raices.

app.get('/', (req, res) => {
    let html = path.resolve(__dirname, "./views/home.html")
    res.sendFile(html)
})

app.get('/login.html', (req, res) => {
    let html = path.resolve(__dirname, "./views/login.html")
    res.sendFile(html)
})

app.get('/signin.html', (req, res) => {
    let html = path.resolve(__dirname, "./views/signin.html")
    res.sendFile(html)
})

