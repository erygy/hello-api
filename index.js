import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.json({ message: "Bonjour depuis ton microservice API 👋" });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
