const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

dotenv.config({ path: __dirname + '/../../.env' });


const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}));

const PORT_FOR_WEATHER = process.env.PORT_FOR_WEATHER || 3001;
const API_KEY = process.env.OPENWEATHER_API_KEY;

app.get('/weather', async (req, res) => {
    let city = req.query.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data?.message || "Internal Server Error" });
    }
});
app.get('/weather/forecast', async (req, res) => {
    let city = req.query.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data?.message || "Internal Server Error" });
    }
});


app.listen(PORT_FOR_WEATHER, () => console.log('Server is running on port ' + PORT_FOR_WEATHER))