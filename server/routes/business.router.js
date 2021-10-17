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
 * GET details of selected business
 */
router.get('/:id', (req, res) => {
  // console.log('in GET details');
  // console.log('this is req.params: ', req.params);
  const businessId = req.params.id;
  // console.log('this is businessId: ', businessId);
  const detailQuery = `SELECT * FROM "business" WHERE "business"."id" = $1;`;
  pool.query(detailQuery, [businessId])
    .then(result => {
      console.log('this is result: ', result);
      res.send(result.rows[0]);
    }).catch(error => {
      console.log('error in GET details', error);
      res.sendStatus(500);
    })
})

/**
 * Add business for logged in user
 */
 router.post('/', rejectUnauthenticated, (req, res) => {

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
