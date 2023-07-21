const express = require('express')
const app = new express()
const port = 3030

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})