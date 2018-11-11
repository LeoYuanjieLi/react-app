// const path = require('path');
import config, { nodeEnv } from './config';
import express from 'express';
import apiRouter from './api/index';

const app = express();

app.set('view engine', 'ejs');

app.use('/api', apiRouter);


app.get('/', (req, res) => {
    res.render('index', {
        content: `This is <em>Leo</em>'s territory!`
    });
});

app.get('/about', (req, res) => {
    res.send('Hello Express!');
});

app.use(express.static('public'));

app.listen(config.port, () => {
    console.log('Express listening on port ', config.port);
})

