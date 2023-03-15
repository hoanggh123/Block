
const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response) =>{
    var a = 1 ;
    var b = 2 ;
    var c = a + b
    return response.send('Hello word NodeJS '+c);
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
