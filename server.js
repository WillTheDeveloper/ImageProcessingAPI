const express = require('express')
const app = express()
const port = 3000
const processor = require('./processor.js');

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/get', (req, res) => {
    res.send('Hello World!')
})
app.get('/resize/:width/', (req, res) => {
    res.attachment(res.params.file);
    processor.resize('./Source/image01.JPG', req.params.width).then(r => res.send(res.params.file.filename));
    res.send(res.params.width);
})

app.post('/upload', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})