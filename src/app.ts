//Setting up express server
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Typescript tutorial')
})

app.listen(port, ()=>{
    console.log(`Listenning at http://localhost:${port}`)
})