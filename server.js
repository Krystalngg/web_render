import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express()
app.use(cors())
dotenv.config()

app.get('/', (req, res) => {
    res.send({
        "message": "Hello World from Krystal hehe"
    })
});

app.listen(8080, () => {
    console.log("The server is running on port 8080");
})
