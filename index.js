const express = require('express')
const app = express()

app.get('/',(req, res) => {
res.send('welcome in home test CI/CD!')
})

app.get('/test',(req, res) => {
    res.send('tested /test route')
    })

app.listen(3000,() => {
    console.log('Server started on 3000')
})