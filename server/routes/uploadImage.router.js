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
    folder: "images",
  },
});
const upload = multer({ storage: storage });



router.get('/', (req, res) => {
  console.log('in upload image router');
  const query = `SELECT * FROM photo_upload WHERE project_id = $1`;
  const value = [req.body.project_id]
  pool.query(query, value)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR getting photos', err);
      res.sendStatus(500)
    })
});

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send(req.file.path);
  console.log(req.file.path);
});//end cloudinary POST

router.post('/database', async (req, res) => {
  console.log('url to database POST:', req.body, req.user);
  let photos = req.body.photos;
  try {
    const client = await pool.connect();
    await client.query('BEGIN');
    await Promise.all( // Allows for concurrent requests
      photos.map(async (photo) => {
        const queryString = `INSERT INTO photo_upload ( "photo_upload_path", "user_id", "project_id" ) VALUES ( $1, $2, $3 );`;
        const values = [photo, req.user.id, req.body.projectId];
        await client.query(queryString, values);

      })
    );
    await client.query('COMMIT');
    client.release();
    res.sendStatus(201);
  } catch (error) {
    console.log('ROLLBACK', error);
    await client.query('ROLLBACK');
    client.release();
    res.sendStatus(500);
  }
})//end database POST

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


module.exports = router;
