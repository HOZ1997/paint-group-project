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

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send(req.file.path);
  console.log(req.file.path);
});

router.post('/database', (req, res) => {
  console.log('url to database POST:', req.body);
  const queryString = `INSERT INTO photo_test ( "photo_upload_path", "user_id" ) VALUES ( $1, $2 );`;
  const values = [req.body, req.user.id]
  
  pool.query(queryString, values)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error in database POST route', err);
      res.sendStatus(500);
    });
})//end database POST

module.exports = router;