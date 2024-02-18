const express = require('express')
const app = express()

app.get('/',(req, res) => {
res.send('welcome in home test CI/CD! frontend updated')
})

app.get('/test',(req, res) => {
    res.send('tested /test route frontend updated')
    })

app.listen(4000,() => {
    console.log('Server started on 4000')
})