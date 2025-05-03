const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.json({ message: "Bonjour depuis ton microservice API 👋" });
});

app.post('/uppercase', (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Le champ `text` est requis en tant que chaîne.' });
  }
  res.json({ result: text.toUpperCase() });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
