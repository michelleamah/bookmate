const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/books', async (req, res) => {
  const { genres } = req.query;
  const genre = genres.toLowerCase().replace(' ', '_');

  try {
    const response = await axios.get(`https://openlibrary.org/subjects/${genre}.json`);
    const books = response.data.works.map(item => ({
      id: item.key,
      title: item.title,
      author: item.authors?.[0].name || 'Unknown',
      cover_id: item.cover_id || '',
      description: item.description?.value || 'No description available'
    }));

    const randomBooks = books.sort(() => 0.5 - Math.random()).slice(0, 5);
    res.json(randomBooks);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Error fetching books');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
