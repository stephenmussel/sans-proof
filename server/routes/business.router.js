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
      // console.log('this is result: ', result);
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
  console.log('this is req.body', req.body); // {name: '', rating: ''...}
  const newBus = req.body;
  console.log('this is logged in user ID: ', req.user.id);
  // NUM 4
  const insertQuery = `
  INSERT INTO "business" ("name", "rating", "description", "address", "city", "state", "zip", "phone", "website", "user_id") 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
  // NUM 5
  pool.query(insertQuery, [
    newBus.name, 
    newBus.rating, 
    newBus.description,
    newBus.address,
    newBus.city,
    newBus.state,
    newBus.zip,
    newBus.phone,
    newBus.website,
    req.user.id])

   .then(result => {
     console.log('this is POST result', result);
     res.sendStatus(201);
   }).catch(error => {
     console.log('error in adding new business', error);
     res.sendStatus(500)
   })
});

/**
 * DELETE a business that logged in user added
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
   console.log('this ID of business to delete: ', req.params.id);
   console.log('this is logged in user ID: ', req.user.id);
   
   const busId = req.params.id;
   const deleteQuery = `DELETE FROM "business"
   WHERE "id" = $1
   AND "user_id" = $2;`;
   pool.query(deleteQuery, [busId, req.user.id])
    .then(result => {
      // console.log('this is result', result);
      res.sendStatus(201)
    }).catch(error => {
      console.log('error in deleting business', error);
      res.sendStatus(500); 
    }) 
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
