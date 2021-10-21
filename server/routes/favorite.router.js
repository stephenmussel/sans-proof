const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all user's favorites on the page
 */
router.get('/', rejectUnauthenticated, (req, res) => {  
  // console.log('this is req.user.id', req.user.id);
  const userId = req.user.id;
  // list of favorited businesses by user
  const queryText = `SELECT "business"."id", "business"."name", "business"."notes" FROM "business"
  JOIN "favorite" ON "business"."id" = "favorite"."business_id"
  WHERE "favorite"."user_id" = $1
  GROUP BY "business"."id", "business"."name", "business"."notes"
  ORDER BY "name" ASC;`;
  
  pool.query(queryText, [userId])
    .then(result => {
      res.send(result.rows)
    }).catch(error => {
      console.log('error in GET /favorite', error);
    })
});

/**
 * DELETE a favorite in logged user's profile
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('this is ID of favorite to delete: ', req.params.id);
  console.log('this is logged in user ID: ', req.user.id);
  const favId = req.params.id;
  const userId = req.user.id;
  const deleteQuery = `DELETE FROM "favorite"
  WHERE "business_id" = $1
  AND "user_id" = $2;`;
  pool.query(deleteQuery, [favId, userId])
    .then(result => {
      console.log('this is result: ', result.rowCount);
      res.sendStatus(201)
    }).catch(error => {
      console.log('error in deleting favorite business', error);
     res.sendStatus(500); 
    })
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

/**
 * edit notes for favorited business of logged in user
 */
 router.put('/', rejectUnauthenticated, (req, res) => {
  console.log('this is req.body: ', req.body);
  console.log('this is logged in user ID: ', req.user.id);
  console.log('what is this?', req.params.id);
  
  const newNote = req.body;
  const updateQuery = `UPDATE "favorite"
  SET "notes" = $1
  WHERE "favorite"."user_id" = $2 AND "favorite"."business_id" = $3;`;
  pool.query(updateQuery, [newNote, req.user.id, req.params.id])
    .then(result => {
      res.sendStatus(201);
    }).catch(error => {
      console.log('error in updating note: ', error);
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
