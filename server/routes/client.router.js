const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log ("in client get");
  const queryString =`
  SELECT paintproject_input.id,client_type_name,client_firstlast_name, decision_firstlast_name, decision_emailaddress, decision_phonenumber,project_address_1,project_address_2, project_address_city, project_address_state, project_address_zip, project_house_year, project_address_notes
  FROM paintproject_input
  JOIN  client_type ON  client_type_id  = client_type.id
  ORDER BY paintproject_input.id DESC;`;
  pool.query(queryString).then((results)=>{
    res.send (results.rows);
  }).catch ((err)=>{
    console.log (err);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */ // POST route code here
router.post('/', (req, res) => {
  console.log("in client post");
 const queryString =`
 INSERT INTO "paintproject_input"( client_type_id, client_firstlast_name, decision_firstlast_name, decision_emailaddress, decision_phonenumber, project_address_1, project_address_2, project_address_city, project_address_state, project_address_zip, project_house_year, project_address_notes, user_id )
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 )`;
 values =
[req.body.client_type_id, req.body.client_firstlast_name, req.body.decision_firstlast_name, req.body.decision_emailaddress, req.body.decision_phonenumber, req.body.project_address_1, req.body.project_address_2, req.body.project_address_city,req.body.project_address_state, req.body.project_address_zip, req.body.project_house_year, req.body.project_address_notes,req.body.user_id ];
pool.query (queryString, values).then ((results)=>{
  res.sendStatus (200);
}).catch((err)=>{
  console.log (err);
  res.sendStatus(500);
});
});



module.exports = router;