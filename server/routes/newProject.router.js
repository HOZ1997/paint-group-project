const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  const newProject = `
  INSERT INTO paintproject_input DEFAULT VALUES`;
  const values = [];
  pool.query(newProject)
  .then(result => {
    console.log('added new row (project) to paintproject_input');
  }).catch(err => {
    console.log('problem adding new project', err);
    res.sendStatus(500);
  })
  // POST route code here
});

router.put('/', (req, res) => {
  console.log('req.body:', req.body);
  const newProject = `UPDATE TABLE "paintproject_input" ("") VALUES ("")`;
  const values = [];
  pool.query(newProject)
  .then(result => {
    console.log('added to paintproject_input');
  }).catch(err => {
    console.log('problem updating project', err);
    res.sendStatus(500);
  });
});

module.exports = router;