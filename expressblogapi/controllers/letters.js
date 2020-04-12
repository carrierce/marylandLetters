const appRoot = require('app-root-path');
const db = require(appRoot + '/db/db');

const getAllLetters = async (req, res) => {
  console.log('getAllLetters');
  const letters = await db('letters')
    .select('*')
    .orderBy('letter_id', 'desc')
    .limit(10);
  res.send(letters);
};

const getLetter = async (req, res) => {
  const id = req.params.id;
  const letter = await db('letters').select().where('letter_id', id);
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
  const request = req.query;
  const filterCheck = Object.keys(request).filter((item) => {
    return request[item] !== '';
  });
  console.log(filterCheck);
  try {
    const letters = await db('letters')
      .select('*')
      .where(function () {
        if (request.year) {
          this.where('year', request.year);
        }
        if (request.day) {
          this.andWhere('day', request.day);
        }
        if (request.month) {
          this.andWhere('month', request.month);
        }
        if (request.wordCount) {
          this.andWhere('wordCount', request.wordCount);
        }
        if (request.fromFirstName) {
          this.andWhere(
            'fromFirstName',
            'like',
            '%' + request.fromFirstName + '%'
          );
        }
        if (request.fromLastName) {
          this.andWhere(
            'fromLastName',
            'like',
            '%' + request.fromLastName + '%'
          );
        }
        if (request.notes) {
          this.andWhere('notes', 'like', '%' + request.notes + '%');
        }
        if (request.openingNote) {
          this.andWhere('openingNote', 'like', '%' + request.openingNote + '%');
        }
        if (request.place) {
          this.andWhere('place', 'like', '%' + request.place + '%');
        }
        if (request.postmark) {
          this.andWhere('postmark', 'like', '%' + request.postmark + '%');
        }
        if (request.text) {
          this.andWhere('text', 'like', '%' + request.text + '%');
        }
        if (request.toAddress) {
          this.andWhere('toAddress', 'like', '%' + request.toAddress + '%');
        }
        if (request.toPersonFromPerson) {
          this.andWhere(
            'toPersonFromPerson',
            'like',
            '%' + request.toPersonFromPerson + '%'
          );
        }
        if (request.to) {
          this.andWhere('to', 'like', '%' + request.to + '%');
        }
        if (request) {
          this.orWhere('year', -1000);
        }
      });
    if (filterCheck.length <= 0) {
      getAllLetters(req, res);
    } else {
      res.send(letters);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAllLetters,
  getLetter,
  getLetterByYear,
  getLetterByQuery,
};
