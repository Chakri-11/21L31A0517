const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;

const WINDOW_SIZE = 10;
const BASE_URL = 'http://20.244.56.144/test';
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LCJhdCI6MTY3MTAzOTY4LCJpc3MiOiJBZmZvcmRlZCIsImpjaSI6IjM3YmM0NDBjLTczZDMtNDdiYS04Njc1LTIxZjY2ZWY5YjczNSIsIm5hbWUiOiJDb21wYW55TmFtZSIsImNvbXBhbnlOYW1lIjoiZ2xvYmFsaHR0cCJ9.jmk2F73GZ7q7EaIGD5hc4oDKKIZWQ9UP3xQ-40bsuBA";

const numberTypes = {
  'p': 'primes',
  'f': 'fibo',
  'e': 'even',
  'r': 'rand',
};

let numberWindow = [];

const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(`${BASE_URL}/${type}`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      timeout: 500,
    });
    return response.data.numbers;
  } catch (error) {
    return [];
  }
};

app.get('/numbers/:numberid', async (req, res) => {
  const { numberid } = req.params;
  const type = numberTypes[numberid];

  if (!type) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const numbers = await fetchNumbers(type);
  const uniqueNumbers = [...new Set(numbers)];

  const windowPrevState = [...numberWindow];
  numberWindow = [...numberWindow, ...uniqueNumbers].slice(-WINDOW_SIZE);

  const average = numberWindow.length > 0
    ? numberWindow.reduce((acc, num) => acc + num, 0) / numberWindow.length
    : 0;

  res.json({
    windowPrevState,
    windowCurrState: numberWindow,
    numbers: uniqueNumbers,
    avg: parseFloat(average.toFixed(2)),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
