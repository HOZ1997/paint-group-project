require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer')
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "image-upload",
  },
});
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  console.log('in upload image router');
  const query = `SELECT * FROM photo_test WHERE user_id = $1`;
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

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send(req.file.path);
  console.log(req.file.path);
});

router.post('/database', (req, res) => {
  console.log('url to database POST:', req.body);
  const queryString = `INSERT INTO image_spike ( "url", "project_id" ) VALUES ( $1, $2 );`;
  const values = [req.body, '12']

  pool.query(queryString, values)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error in database POST route', err);
      res.sendStatus(500);
    });
})//end database POST

module.exports = router;