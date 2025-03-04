const express = require('express')
const dotenv = require('dotenv')
const axios = require('axios')
const cors = require('cors');
const { v4: uuidv4 } = require('uuid')

dotenv.config({ path: __dirname + '/../../.env' });
const app = express()
app.use(cors());
const PORT_FOR_NEWS = process.env.PORT_FOR_NEWS || 3002
const API_KEY = process.env.NEWS_API_KEY
let artcilesWithId = []

const currentDate = new Date()

currentDate.setDate(currentDate.getDate() - 28)
let newDate = currentDate.toISOString().slice(0, 10)
console.log(newDate);

app.get('/news', async (req, res) => {
const uri = `https://newsapi.org/v2/everything?q=tesla&from=${newDate}&sortBy=publishedAt&apiKey=${API_KEY}`
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


app.listen(PORT_FOR_NEWS, () => console.log('Server is running on port ' + PORT_FOR_NEWS))