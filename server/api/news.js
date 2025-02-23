const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

dotenv.config({ path: __dirname + '/../../.env' });

const router = express.Router();
router.use(cors());

const API_KEY = process.env.NEWS_API_KEY;
let articlesWithId = [];

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 30);
let newDate = currentDate.toISOString().slice(0, 10);

router.get('/news', async (req, res) => {
    const uri = `https://newsapi.org/v2/everything?q=tesla&from=${newDate}&sortBy=publishedAt&apiKey=${API_KEY}`;
    try {
        const response = await axios.get(uri);
        articlesWithId = response.data.articles.map(article => ({
            ...article, id: uuidv4()
        }));
        res.send({ ...response.data, articles: articlesWithId });
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Internal Server Error" });
    }
});

router.get('/news/:id', async (req, res) => {
    const { id } = req.params;
    const article = articlesWithId.find(article => article.id === id);
    if (article) {
        res.json(article);
    } else {
        res.status(404).send('Article not found');
    }
});

module.exports = router;
