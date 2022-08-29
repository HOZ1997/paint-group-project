const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log ("in paint scope get");
  const queryString =`SELECT paintproject_input.id,isexteriorprep_powerwash,isexteriorprep_scrape, isexteriorprep_mildew, isexteriorwarranty_oneyear, isexteriorwarranty_threeyear, isexteriorwarranty_fiveyear FROM paintproject_input ORDER BY paintproject_input.id DESC;`;
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
  console.log("in paint scope post");
 const queryString =`INSERT INTO "paintproject_input"( isexteriorprep_powerwash, isexteriorprep_scrape, isexteriorprep_mildew, isexteriorwarranty_oneyear, isexteriorwarranty_threeyear, isexteriorwarranty_fiveyear, user_id ) VALUES ($1, $2, $3, $4, $5, $6, $7 )`;
 values = [ req.body.isexteriorprep_powerwash, req.body.isexteriorprep_scrape, req.body.isexteriorprep_mildew, req.body.isexteriorwarranty_oneyear, req.body.isexteriorwarranty_threeyear, req.body.isexteriorwarranty_fiveyear, req.body.user_id ];
pool.query (queryString, values).then ((results)=>{
  res.sendStatus (200);
}).catch((err)=>{
  console.log (err);
  res.sendStatus(500);
});
});



module.exports = router;