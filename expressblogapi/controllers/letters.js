const appRoot = require('app-root-path');
const db = require(appRoot + '/db/db');

const getAllLetters = async (req, res) => {
  const letters = await db('letters')
    .select('*')
    .orderBy('letter_id', 'desc')
    .limit(3);
  res.send(letters);
};

const getLetter = async (req, res) => {
  const id = req.params.id;
  const letter = await db('letters')
    .select()
    .where('letter_id', id);
  res.send(letter);
};

const getLetterByYear = async (req, res) => {
  const year = req.params.year;
  const letters = await db('letters')
    .select('text', 'fromFirstName')
    .where('year', year);
  res.send(letters);
};

const getLetterByQuery = async (req, res) => {
  console.log('letter by query');
  const year = req.query.year;
  if (year) {
    const letters = await db('letters')
      .select('text', 'fromFirstName')
      .where('year', year);
  }
  res.send(req.query);
};

module.exports = {
  getAllLetters,
  getLetter,
  getLetterByYear,
  getLetterByQuery
};
