import express from 'express';
import { app } from './app';

const PORT = process.env.PORT || 3000;
const server = express();

server.use('/api', app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
