const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/../../.env' });

const router = express.Router();

const API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/weather', async (req, res) => {
    let city = req.query.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data?.message || "Internal Server Error" });
    }
});

router.get('/weather/forecast', async (req, res) => {
    let city = req.query.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data?.message || "Internal Server Error" });
    }
});

module.exports = router;
