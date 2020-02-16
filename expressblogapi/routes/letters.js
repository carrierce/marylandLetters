const router = require('express').Router();
const {
  getAllLetters,
  getLetter,
  getLetterByYear,
  getLetterByQuery
} = require('../controllers/letters');

// Insert Letters
router.get('/', getAllLetters);
router.get('/letter/:id', getLetter);
router.get('/letters/:year', getLetterByYear);
router.get('/letters/', getLetterByQuery);
// router.get('/insert', insertLetters);

module.exports = router;
