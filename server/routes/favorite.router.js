const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all favorites on the page
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorite" ORDER BY "id" DESC;`;
  pool.query(queryText)
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
  // SELECT "name" FROM "business" JOIN "favorite" ON "business"."id" = "favorite"."business_id";
  // const insertQuery = `
  // SELECT "name" 
  // FROM "business"
  // JOIN "favorite" 
  // ON "business"."id" = $1;`;
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
