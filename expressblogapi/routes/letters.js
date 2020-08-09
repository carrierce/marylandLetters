const router = require('express').Router();
const {
  getAllLetters,
  getLetter,
  getLetterByYear,
  getLetterByQuery,
  getAllNames,
  getAllLetterYears,
  getLettersCount,
  getPersonDetails,
  getNumberOfLettersByYear,
} = require('../controllers/letters');

// Insert Letters
router.get('/', getAllLetters);
router.get('/names', getAllNames);
router.get('/letter/:id', getLetter);
router.get('/letters/:year', getLetterByYear);
router.get('/letters/', getLetterByQuery);
router.get('/years', getAllLetterYears);
router.get('/getLettersCount', getLettersCount);
router.get('/getPersonDetails', getPersonDetails);
router.get('/getNumberOfLettersByYear', getNumberOfLettersByYear);

// router.get('/insert', insertLetters);

module.exports = router;
