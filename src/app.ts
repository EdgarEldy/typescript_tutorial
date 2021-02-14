//Setting up express server
import express, {Application, Request, Response, NextFunction} from 'express'

const app: Application = express()
const port = 3000

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.send('Typescript tutorial')
})

app.listen(port, ()=>{
    console.log(`Listenning at http://localhost:${port}`)
})