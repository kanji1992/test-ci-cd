const express = require('express')
const app = express()

app.get('/',(req, res) => {
res.send('welcome in home test CI/CD! updated1')
})

app.get('/test',(req, res) => {
    res.send('tested /test route updated1')
    })

app.listen(3000,() => {
    console.log('Server started on 3000')
})