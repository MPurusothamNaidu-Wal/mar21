var express = require('express');
var router = express.Router();
var twitterController = require('../controllers/twitter');
router.get('/', twitterController.getTwitter);
router.post('/', twitterController.createTwitter);
router.delete('/:indexToDelete', twitterController.deleteTwitter);
router.get('/clearall', twitterController.delAll);
module.exports = router;
