const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Router for Proposal and Work Order

router.get('/:id', (req, res) => {
  console.log('in projects router here is req.params.id?', typeof(req.params.id), req.params.id);
  const query = `SELECT * FROM paintproject_input
  JOIN photo_upload ON photo_upload.project_id = paintproject_input.id
  JOIN project_buildingtype ON project_buildingtype.id = paintproject_input.project_buildingtype_id
  JOIN project_propertytype ON project_propertytype.id = paintproject_input.project_propertytype_id
  JOIN specialfeatureexterior_type ON specialfeatureexterior_type.id = paintproject_input.specialfeatureexterior_type_id
  WHERE paintproject_input.id = $1`;
  const value = [req.params.id];
  pool.query(query, value)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR spawning project', err);
      res.sendStatus(500)
    })
});

module.exports = router;
