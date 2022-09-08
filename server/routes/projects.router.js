const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//Router for the Projects List Page (landing page)
router.get('/', (req, res) => {
  console.log('in projects router');
  const query = `SELECT * FROM paintproject_input WHERE user_id = $1`;
  const value = [req.user.id]
  pool.query(query, value)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR spawning projects', err);
      res.sendStatus(500)
    })
});



module.exports = router;
