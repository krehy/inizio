const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;


const API_KEY = 'AIzaSyCmXktsmEptpY-Q9CZDz8dZwyXAgnG__Zc';
const CX = '003a14d5c7e6647d1';

app.use(cors());

app.get('/search', async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ error: 'Musíte zadat klíčové slovo.' });
    }
    
    try {
        const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}`;
        const response = await axios.get(url);
        
        const results = response.data.items.map(item => ({
            title: item.title || "Bez názvu",
            link: item.link || "Bez odkazu",
            snippet: item.snippet || "Bez popisu"
        }));

        res.json(results);
    } catch (error) {
        console.error('Chyba při získávání výsledků:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Chyba při získávání výsledků.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
