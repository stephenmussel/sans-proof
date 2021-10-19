const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all favorites on the page
 */
router.get('/', rejectUnauthenticated, (req, res) => {  
  // const queryText = `SELECT "business"."id", "business"."name", "business"."notes" FROM "business"
  // JOIN "favorite" ON "business"."id" = "favorite"."business_id"
  // WHERE "favorite"."business_id" = "business"."id"
  // GROUP BY "business"."id", "business"."name", "business"."notes";`;
  console.log('this is req.user.id', req.user.id);
  const userId = req.user.id;
  
  const queryText = `SELECT "business"."id", "business"."name", "business"."notes" FROM "business"
  JOIN "favorite" ON "business"."id" = "favorite"."business_id"
  WHERE "favorite"."user_id" = $1
  GROUP BY "business"."id", "business"."name", "business"."notes";`;
  
  pool.query(queryText, [userId])
    .then(result => {
      res.send(result.rows)
    }).catch(error => {
      console.log('error in GET /favorite', error);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

/**
 * Add a new favorite for logged in user
 */
 router.post('/:id', rejectUnauthenticated, (req, res) => {
  console.log('ID of business to add: ', req.params.id);
  console.log('logged in user ID: ', req.user.id);
  const busId = req.params.id;
  const insertQuery = `
  INSERT INTO "favorite" ("user_id", "business_id") 
  VALUES ($1, $2);`;
  // pool.query(insertQuery, [busId])
  pool.query(insertQuery, [req.user.id, busId])
    .then(result => {
      res.sendStatus(201)
    }).catch(error => {
      console.log('error in adding favorite', error);
      
    })
  
});

module.exports = router;
