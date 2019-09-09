import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

app.get('/ping', (req, res) => res.send("PONG"))

app.listen(9000, () => {
    console.log('Node server is running on port 9000')
})