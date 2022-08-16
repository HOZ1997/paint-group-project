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
    folder: "spike-image-upload",
  },
});
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send(req.file.path);
  console.log(req.file.path);
});

module.exports = router;