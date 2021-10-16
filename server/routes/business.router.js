const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all the businesses on the page
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // displays newest entries first
  let queryText = `SELECT * FROM "business" ORDER BY "id" DESC;` 
  pool.query(queryText)
  .then(result => {
      res.send(result.rows)
  }).catch(error => {
      console.log('error in GET /business', error); 
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
