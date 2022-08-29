const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('in projects router');
  const query = `
  SELECT * FROM paintproject_input
  JOIN photo_upload ON photo_upload.id = paintproject_input.photo_upload_id
  JOIN project_buildingtype ON project_buildingtype.id = paintproject_input.project_buildingtype_id
  JOIN project_propertytype ON project_propertytype.id = paintproject_input.project_propertytype_id
  JOIN specialfeatureexterior_type ON specialfeatureexterior_type.id = paintproject_input.specialfeatureexterior_type_id
  WHERE user_id = $1 and paintproject_input.id = $2`;
  const values = [req.user.id, req.params.id];
  pool.query(query, values)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR spawning project', err);
      res.sendStatus(500)
    })
});

module.exports = router;
