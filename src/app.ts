import express from 'express';
import cors from 'cors';

// Default Port
const PORT: number = 3000;

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Main route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

// Servers
app.listen(PORT, () => {
  return console.log(`Server is listening on ${PORT}`);
});
