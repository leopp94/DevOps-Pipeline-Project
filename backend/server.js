import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const PORT = process.env.PORT || 3000;
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
