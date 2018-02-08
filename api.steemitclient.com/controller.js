var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
/*
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "test",
  database: "steemclient"
});
*/

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//testing post request
router.post('/', function (req, res) {
    res.status(200).send('Post request done.');
});

//testing get request
router.get('/', function (req, res) {
     res.status(200).send('Get request done.');
});

module.exports = router;
