import express from 'express';
import { getLongUrl, getShortUrl } from '../controllers/urlController.js';

const UrlRouter = express.Router();

UrlRouter.get('/:code', getLongUrl);
UrlRouter.post('/tiny-url', getShortUrl);

export default UrlRouter;