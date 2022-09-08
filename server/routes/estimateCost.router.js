const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('in cost get');
  const queryString = `SELECT paintproject_input.id, exteriorestimate_laborcost, exteriorestimate_materialcost, exteriorestimate_totalcost FROM paintproject_input;`;
  pool
    .query(queryString)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('in cost post');
  const queryString = `INSERT INTO "paintproject_input"( exteriorestimate_laborcost, exteriorestimate_materialcost, exteriorestimate_totalcost ) VALUES ($1, $2, $3)`;
  values = [
    req.body.exteriorestimate_laborcost,
    req.body.exteriorestimate_materialcost,
    (req.body.exteriorestimate_totalcost),
  ];
  pool
    .query(queryString, values)
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
