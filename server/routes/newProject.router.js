const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log('req.body in newProject.router:', req.body);
  const newProject = `
  INSERT INTO paintproject_input ("project_job_number") VALUES (DEFAULT) RETURNING id`;
  pool.query(newProject)
  .then(result => {
    console.log('added new row (project) to paintproject_input');
    console.log('new project ID is', result.rows[0].id);
    res.send(result.rows[0].id.toString());
  }).catch(err => {
    console.log('problem adding new project', err);
    res.sendStatus(500);
  })
  // POST route code here
});

router.put('/', (req, res) => {
  console.log('req.body:', req.body);
  const newProject = `
  UPDATE TABLE paintproject_input
  (client_type_id, client_firstlast_name, decision_firstlast_name, decision_emailaddress, decicion_phonenumber,
  project_address_1, project_address_2, project_address_city, project_address_state, project_address_zip, project_house_year,
  project_address_notes, project_propertytype_id, project_buildingtype_id, isproject_typeinterior, isproject_typeexterior,
  isproject_typecabinetry, isproject_typespecialfeature, project_startdate, project_complete_specificdate, specialfeatureexterior_id,
  specialfeature_paintproduct, isspecialfeaturestatus_needprimer, isspecialfeaturestatus_patchedrepair, isspecialfeaturestatus_extensivescraping,
  specialfeature_notes, exteriorestimate_laborcost, exteriorestimate_materialcost, exteriorestimate_totalcost, isexteriorprep_powerwash,
  isexteriorprep_scrape, isexteriorprep_mildew, isexteriorwarranty_oneyear, isexteriorwarranty_threeyear, isexteriorwarranty_fiveyear WHERE id = $36)

  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36)`;

  const values = [req.body.client_type_id, req.body.client_firstlast_name, req.body.decision_firstlast_name, req.body.decision_emailaddress,
    req.body.decicion_phonenumber, req.body.project_address_1, req.body.project_address_2, req.body.project_address_city,
    req.body.project_address_state, req.body.project_address_zip, req.body.project_house_year, req.body.project_address_notes,
    req.body.project_propertytype_id, req.body.project_buildingtype_id, req.body.isproject_typeinterior,
    req.body.isproject_typeexterior, req.body.isproject_typecabinetry, req.body.isproject_typespecialfeature, req.body.project_startdate,
    req.body.project_complete_specificdate, req.body.specialfeatureexterior_id, req.body.specialfeature_paintproduct,
    req.body.isspecialfeaturestatus_needprimer, req.body.isspecialfeaturestatus_patchedrepair, req.body.isspecialfeaturestatus_extensivescraping,
    req.body.specialfeature_notes, req.body.exteriorestimate_laborcost, req.body.exteriorestimate_materialcost, req.body.exteriorestimate_totalcost,
    req.body.isexteriorprep_powerwash, req.body.isexteriorprep_scrape, req.body.isexteriorprep_mildew, req.body.isexteriorwarranty_oneyear,
    req.body.isexteriorwarranty_threeyear, req.body.isexteriorwarranty_fiveyear, req.body.id];
  pool.query(newProject, values)
  .then(result => {
    console.log('added to paintproject_input');
  }).catch(err => {
    console.log('problem updating project', err);
    res.sendStatus(500);
  });
});

module.exports = router;