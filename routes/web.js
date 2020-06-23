const express = require("express");
const router = express.Router();
const fs = require('fs');
const boardController = require('../controllers/boardController')


router.get('/', boardController.index);

router.get('/list.json', boardController.jsonList);

module.exports = router;
