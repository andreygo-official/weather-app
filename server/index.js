const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config({ path: __dirname + '/../.env' });

const app = express();
app.use(cors());


const weatherRoutes = require('./api/weather');
const newsRoutes = require('./api/news');


app.use('/api', weatherRoutes);
app.use('/api', newsRoutes);


module.exports = app;
