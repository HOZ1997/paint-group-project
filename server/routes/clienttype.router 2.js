const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('GET request to /clienttype');
  const queryString = `SELECT * FROM client_type ORDER BY ID`;
  pool.query(queryString).then((results)=>{
    res.send(results.rows);
  }).catch ((err)=>{
    console.log (err);
    res.sendStatus(500);
  });
});
module.exports = router;