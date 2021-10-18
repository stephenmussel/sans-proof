const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
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
  console.log('this ID of business to add: ', req.params.id);
  console.log('this is logged in user ID: ', req.user.id);
  const busId = req.params.id;
  const insertQuery = `
  INSERT INTO "favorite" ("user_id", "business_id") 
  VALUES ($1, $2);`;
  pool.query(insertQuery, [req.user.id, busId])
    .then(result => {
      res.sendStatus(201)
    }).catch(error => {
      console.log('error in adding favorite', error);
      
    })
  
});

module.exports = router;
