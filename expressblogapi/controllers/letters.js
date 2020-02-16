const xml2js = require('xml2js');
// const fs = require('fs');
// const parser = new xml2js.Parser({ attrkey: 'ATTR' });
const appRoot = require('app-root-path');
const db = require(appRoot + '/db/db');

// const insertLetters = (req, res) => {
//   let xml_string = fs.readFileSync(appRoot + '/letters.xml', 'utf8');
//   parser.parseString(xml_string, async function(error, result) {
//     if (error === null) {
//       let outerData = result.FMPXMLRESULT.RESULTSET[0].ROW;
//       let savedLetters = '';
//       for (let k = 0; k < outerData.length; k++) {
//         let rowObject = {
//           concludingNote: '',
//           day: 0,
//           fromFirstName: '',
//           fromLastName: '',
//           letterId: 0,
//           month: 0,
//           notes: '',
//           openingNote: '',
//           place: '',
//           postmark: '',
//           print: '',
//           separator: '',
//           sumWords: 0,
//           text: '',
//           toAddress: '',
//           toPersonFromPerson: '',
//           to: '',
//           wholeDate: '',
//           wordCount: 0,
//           year: 0
//         };
//         let rowKeys = Object.keys(rowObject);
//         let innerData = outerData[k].COL;
//         for (let i = 0; i < innerData.length; i++) {
//           rowObject[rowKeys[i]] = innerData[i].DATA[0];
//         }
//         savedLetters = await db('letters').insert(rowObject);
//       }

//       console.log(savedLetters);
//       res.send(savedLetters);
//     } else {
//       res.send('FAIL');
//       console.log(error);
//     }
//   });
// };

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
    .select('text', 'fromFirstName', 'letter_id')
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

// const getLettersByFilters = async (req, res) => {
//   const filters = req.body
//   const letters = await db('letters')
//     .select('text', 'fromFirstName')
//     .where('year', year);
//   res.send(letters);
// };

module.exports = {
  // insertLetters,
  getAllLetters,
  getLetter,
  getLetterByYear
};
