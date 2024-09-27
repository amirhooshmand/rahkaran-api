import express from 'express';
import { ProxyController } from './presentation/controllers/ProxyController';
import logger from './logger';


const app = express();
app.use(express.json());
app.use((req, res, next) => {
    // Log an info message for each incoming request
    logger.info(`Received a ${req.method} request for ${req.url} with body: ${JSON.stringify(req.body)}`)

    next();
});

const proxyController = new ProxyController();

app.all('/*', (req, res) => proxyController.handle(req, res));

export { app };
