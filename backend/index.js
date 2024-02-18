const express = require('express')
const app = express()

app.get('/',(req, res) => {
res.send('welcome in home test CI/CD! updated3')
})

app.get('/test',(req, res) => {
    res.send('tested /test route updated3')
    })

app.listen(3000,() => {
    console.log('Server started on 3000')
})