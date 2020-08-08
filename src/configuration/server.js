const port = 3003; 

const bodyParser = require('body-parser'); 
const express = require('express'); 
const app = express(); 


app.use(bodyParser.urlencoded({extend: true}))

app.listen(port, function(){
    console.log(`on port ${port}`)
})

module.exports = app; 