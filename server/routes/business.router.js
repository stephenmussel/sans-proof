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
   console.log('this is req.body', req.body);
   const newBus = req.body
   console.log('this is req.user.id', req.user.id);
   const insertQuery = `
   INSERT INTO "business" ("name", "user_id") 
   VALUES ($1, $2)
   RETURNING "id";`;

   pool.query(insertQuery, [newBus.name, req.user.id])
    .then(result => {      
      console.log('this is POST result', result);
      console.log('new business ID: ', result.rows[0].id);
      res.sendStatus(201);
    }).catch(error => {
      console.log('error in adding new business', error);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
