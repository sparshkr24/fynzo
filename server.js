const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
app.use(cors())

const PORT = 5000
const filePath = './data.txt'
let questions = {}

app.get('/', (req, res)=>{
    res.json({
        status: 'ready'
    })
})

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    questions = JSON.parse(data)
    console.log(questions);
});

app.get('/questions', (req, res)=>{
    console.log(questions);
    res.json(questions)
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT: ${PORT}`);
})