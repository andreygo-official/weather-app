const express = require('express')
const request = require('request')
const dotenv = require('dotenv')
const cors = require('cors');

dotenv.config()
const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})
app.use(cors());
const PORT_FOR_WEATHER = process.env.PORT_FOR_WEATHER || 3001
const API_KEY = process.env.OPENWEATHER_API_KEY

app.get('/weather', (req, res) => {
    let city = req.query.city
request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, 
function (error, response, body) {
    const parsedBody = JSON.parse(body)
    if(response.statusCode === 200){
        res.send(parsedBody)
    }
    else {
        res.status(response.statusCode).json({ error: parsedBody.message });
    }
  })
})
app.get('/weather/forecast', (req, res) => {
    let city = req.query.city
request(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`, 
function (error, response, body) {
    const parsedBody = JSON.parse(body)
    if(response.statusCode === 200){
        res.send(parsedBody)
    }
    else {
        res.status(response.statusCode).json({ error: parsedBody.message });
    }
  })
})
app.listen(PORT_FOR_WEATHER, () => {
    console.log('Server started on ' + PORT_FOR_WEATHER + ' port');

});