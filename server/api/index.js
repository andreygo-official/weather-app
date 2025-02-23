const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

dotenv.config({ path: __dirname + '/../../.env' });

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

app.get('/weather', async (req, res) => {
    let city = req.query.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data?.message || "Internal Server Error" });
    }
});
app.get('/weather/forecast', async (req, res) => {
    let city = req.query.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data?.message || "Internal Server Error" });
    }
});



const NEWS_API_KEY = process.env.NEWS_API_KEY
let artcilesWithId = []

const currentDate = new Date()

currentDate.setDate(currentDate.getDate() - 30)
let newDate = currentDate.toISOString().slice(0, 10)


app.get('/news', async (req, res) => {
const uri = `https://newsapi.org/v2/everything?q=tesla&from=${newDate}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
try{
    const response = await axios.get(uri)
    artcilesWithId = response.data.articles.map(article => {
      return {...article, id: uuidv4()}
    })
    res.send({...response.data, articles: artcilesWithId})
}
catch (error) {
    res.status(error.response?.status || 500).json({ error: error.response?.data || "Internal Server Error" });
  }
})

app.get('/news/:id', async (req, res) => {
  const { id } = req.params
  const article = artcilesWithId.find(article => article.id === id)
  if(article){
    res.json(article)
  }
  else{
    res.status(404).send('Article not found')
  }
})
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });