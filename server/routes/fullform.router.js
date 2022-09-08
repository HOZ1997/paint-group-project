const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  console.log("in fullform get router");
  const queryString = `SELECT paintproject_input.id,client_type_name,client_firstlast_name, decision_firstlast_name, decision_emailaddress, decision_phonenumber,project_address_1,project_address_2, project_address_city, project_address_state, project_address_zip, project_house_year, project_address_notes, project_propertytype_id,  project_buildingtype_id, isproject_typeinterior, isproject_typecabinetry, isproject_typespecialfeature, project_startdate,  project_complete_specificdate, specialfeatureexterior_type_id,
  specialfeature_paintproduct,
  isspecialfeaturestatus_needprimer,
  isspecialfeaturestatus_patchedrepair,
  isspecialfeaturestatus_extensivescraping,
  specialfeature_notes,
  exteriorestimate_laborcost,
  exteriorestimate_materialcost,
  exteriorestimate_totalcost,
  isexteriorprep_powerwash,
  isexteriorprep_scrape,
  isexteriorprep_mildew,
  isexteriorprep_scrape,
  isexteriorprep_mildew,
  isexteriorwarranty_oneyear,
  isexteriorwarranty_threeyear,
  isexteriorwarranty_fiveyear
  FROM paintproject_input JOIN  client_type ON  client_type_id  = client_type.id
  JOIN project_propertytype ON	project_propertytype_id	=	project_propertytype.id
  JOIN project_buildingtype	ON	project_buildingtype_id	=	project_buildingtype.id ORDER BY paintproject_input.id;`;
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
 */ // POST route code here
router.post("/", (req, res) => {
  console.log("in fullform post router");
  const queryString = `INSERT INTO "paintproject_input"( client_type_name,client_firstlast_name, decision_firstlast_name, decision_emailaddress, decision_phonenumber,project_address_1,project_address_2, project_address_city, project_address_state, project_address_zip, project_house_year, project_address_notes, project_propertytype_id, project_buildingtype_id, isproject_typeinterior, isproject_typecabinetry, isproject_typespecialfeature, project_startdate,  project_complete_specificdate, specialfeatureexterior_type_id,
  specialfeature_paintproduct,
  isspecialfeaturestatus_needprimer,
  isspecialfeaturestatus_patchedrepair,
  isspecialfeaturestatus_extensivescraping,
  specialfeature_notes,
  exteriorestimate_laborcost,
  exteriorestimate_materialcost,
  exteriorestimate_totalcost,
  isexteriorprep_powerwash,
  isexteriorprep_scrape,
  isexteriorprep_mildew,
  isexteriorprep_scrape,
  isexteriorprep_mildew,
  isexteriorwarranty_oneyear,
  isexteriorwarranty_threeyear,
  isexteriorwarranty_fiveyear ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32 $33, $34, $35, $36 )`;
  const values = [
    req.body.fullForm.client.client_type_id, //1
    req.body.fullForm.client
      .client_firstlast_name, //2
    req.body.fullForm.client
      .decision_firstlast_name, //3
    req.body.fullForm.client
      .decision_emailaddress, //4
    req.body.fullForm.client.decicion_phonenumber, //5
    req.body.fullForm.client.project_address_1, //6
    req.body.fullForm.client.project_address_2, //7
    req.body.fullForm.client.project_address_city, //8
    req.body.fullForm.client
      .project_address_state, //9
    req.body.fullForm.client.project_address_zip, //10
    req.body.fullForm.client.project_house_year, //11
    req.body.fullForm.client
      .project_address_notes, //12
    req.body.fullForm.projectDetails
      .project_propertytype_id, //13
    req.body.fullForm.projectDetails
      .project_buildingtype_id, //14
    req.body.fullForm.projectDetails
      .isproject_typeinterior, //15
    req.body.fullForm.projectDetails
      .isproject_typeexterior, //16
    req.body.fullForm.projectDetails
      .isproject_typecabinetry, //17
    req.body.fullForm.projectDetails
      .isproject_typespecialfeature, //18
    req.body.fullForm.projectDetails
      .project_startdate, //19
    req.body.fullForm.projectDetails
      .project_complete_specificdate, //20
    req.body.fullForm.specialFeature
      .specialfeatureexterior_id, //21
    req.body.fullForm
      .specialFeaturespecialfeature_paintproduct, //22
    req.body.fullForm.specialFeature
      .isspecialfeaturestatus_needprimer, //23
    req.body.fullForm.specialFeature
      .isspecialfeaturestatus_patchedrepair, //24
    req.body.fullForm.specialFeature
      .isspecialfeaturestatus_extensivescraping, //25
    req.body.fullForm.specialFeature
      .specialfeature_notes, //26
    req.body.fullForm.estimateCost
      .exteriorestimate_laborcost, //27
    req.body.fullForm.estimateCost
      .exteriorestimate_materialcost, //28
    req.body.fullForm.estimateCost
      .exteriorestimate_totalcost, //29
    req.body.projectScope
      .isexteriorprep_powerwash, //30
    req.body.projectScope.isexteriorprep_scrape, //31
    req.body.projectScope.isexteriorprep_mildew, //32
    req.body.projectScope
      .isexteriorwarranty_oneyear, //33
    req.body.projectScope
      .isexteriorwarranty_threeyear, //34
    req.body.projectScope
      .isexteriorwarranty_fiveyear, //35
    req.body.user_id,
  ]; //36
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

router.put("/update", (req, res) => {
  console.log(
    "in full form put router",
    req.body,
    req.body.id,
    req.user.id
  );
  const type = "update";
  const queryString = `UPDATE paintproject_input SET "client_type_id" = $1, "client_firstlast_name" =$2, "decision_firstlast_name" =$3, "decision_emailaddress" = $4, "decision_phonenumber" = $5,
        "project_address_1" = $6, "project_address_2" = $7, "project_address_city" = $8, "project_address_state" = $9, "project_address_zip" = $10, "project_house_year" = $11,
        "project_address_notes" = $12, "project_propertytype_id" =$13, "project_buildingtype_id" =$14, "isproject_typeinterior" = $15, "isproject_typeexterior" =$16,
        "isproject_typecabinetry" = $17, "isproject_typespecialfeature" = $18, "project_startdate" = $19, "project_complete_specificdate" = $20, "specialfeatureexterior_type_id" =$21,
        "specialfeature_paintproduct" = $22, "isspecialfeaturestatus_needprimer" = $23, "isspecialfeaturestatus_patchedrepair" = $24, "isspecialfeaturestatus_extensivescraping" = $25,
        "specialfeature_notes" = $26, "exteriorestimate_laborcost" = $27, "exteriorestimate_materialcost" = $28, "exteriorestimate_totalcost" = $29, "isexteriorprep_powerwash" = $30,
        "isexteriorprep_scrape" = $31, "isexteriorprep_mildew" = $32, "isexteriorwarranty_oneyear" = $33, "isexteriorwarranty_threeyear" = $34, "isexteriorwarranty_fiveyear" = $35, "user_id" = $36 WHERE id = $37`;
  const values = [
    req.body.client.client_type_id, //1
    req.body.client.client_firstlast_name, //2
    req.body.client.decision_firstlast_name, //3
    req.body.client.decision_emailaddress, //4
    req.body.client.decision_phonenumber, //5
    req.body.client.project_address_1, //6
    req.body.client.project_address_2, //7
    req.body.client.project_address_city, //8
    req.body.client.project_address_state, //9
    req.body.client.project_address_zip, //10
    req.body.client.project_house_year, //11
    req.body.client.project_address_notes, //12
    req.body.projectDetails
      .project_propertytype_id, //13
    req.body.projectDetails
      .project_buildingtype_id, //14
    req.body.projectDetails
      .isproject_typeinterior, //15
    req.body.projectDetails
      .isproject_typeexterior, //16
    req.body.projectDetails
      .isproject_typecabinetry, //17
    req.body.projectDetails
      .isproject_typespecialfeature, //18
    req.body.projectDetails.project_startdate, //19
    req.body.projectDetails
      .project_complete_specificdate, //20
    req.body.specialFeature
      .specialfeatureexterior_type_id, //21
    req.body.specialFeature
      .specialfeature_paintproduct, //22
    req.body.specialFeature
      .isspecialfeaturestatus_needprimer, //23
    req.body.specialFeature
      .isspecialfeaturestatus_patchedrepair, //24
    req.body.specialFeature
      .isspecialfeaturestatus_extensivescraping, //25
    req.body.specialFeature.specialfeature_notes, //26
    req.body.estimateCost
      .exteriorestimate_laborcost, //27
    req.body.estimateCost
      .exteriorestimate_materialcost, //28
    req.body.estimateCost
      .exteriorestimate_totalcost, //29
    req.body.projectScope
      .isexteriorprep_powerwash, //30
    req.body.projectScope.isexteriorprep_scrape, //31
    req.body.projectScope.isexteriorprep_mildew, //32
    req.body.projectScope
      .isexteriorwarranty_oneyear, //33
    req.body.projectScope
      .isexteriorwarranty_threeyear, //34
    req.body.projectScope
      .isexteriorwarranty_fiveyear, //35
    req.user.id, //36
    req.body.id, //37
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
