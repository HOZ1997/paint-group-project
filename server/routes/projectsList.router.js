const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.get('/', (req, res) => {

//   const query = `SELECT * FROM lorem ipsum`;
//   pool.query(query)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: lorem ipsum', err);
//       res.sendStatus(500)
//     })
// });

// router.get('/:id', (req, res) => {
//   console.log('req params', req.params);
//   const queryString = `SELECT * FROM lorum ipsum WHERE lorem ipsum`;
//   const values = [];
//   pool.query(queryString, values)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: lorem ipsum', err);
//       res.sendStatus(500)
//     })
// });

// /**
//  * POST route template
//  */
// router.post('/loremIpsum', (req, res) => {
//   // POST route code here
// });

module.exports = router;
