const express = require('express');
const router = express.Router();
const telegramController = require('../controllers/telegramController');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/webhook', async (req, res) => {
  const update = req.body;
  await telegramController.handleUpdate(update);
  res.send('ok');
});

module.exports = router;
