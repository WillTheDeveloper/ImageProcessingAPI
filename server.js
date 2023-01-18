const express = require('express')
const app = express()
const port = 3000
const processor = require('./processor.js');
const vault = require("./vault");

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
app.get('/secret/get/:path', (req, res) => {
    const data = vault.getSecret(req.params.path);
    res.send(data);
})
app.get('/secret/set/:path/:data', (req, res) => {
    const data = vault.setSecret(req.params.path, req.params.data);
    res.send(data);
})

app.post('/upload', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})