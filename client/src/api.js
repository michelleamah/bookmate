import axios from 'axios';

export const fetchBooks = async (genres) => {
  const allBooks = [];

  for (const genre of genres) {
    const response = await axios.get(`https://openlibrary.org/subjects/${genre.toLowerCase().replace(' ', '_')}.json`);
    const books = response.data.works;
    allBooks.push(...books);
  }

  const shuffledBooks = allBooks.sort(() => 0.5 - Math.random());

  return shuffledBooks.slice(0, 10);
};
