const express = require('express');
const { default: logger } = require('redux-logger');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "item";`
  pool.query(queryText)
    .then( result => {
      res.send(result.rows)
    }).catch( err => {
      console.log(err);
      res.sendStatus(500)
    })

 // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  const query = `
  INSERT INTO "item" ("description", "image_url", "user_id")
  VALUES ($1, $2, $3);
  `
  const queryValues = [req.body.description, req.body.image_url, req.user.id]

  pool.query(query, queryValues)
  .then(result =>{
    res.sendStatus(201);
  }).catch(err => {
    res.sendStatus(500)
  })
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  const queryText = `DELETE FROM "item"
                     WHERE "id" = $1;`
  const queryValue = [req.params.id]
  pool.query(queryText, queryValue)
    .then( result => {
      res.sendStatus(204)
    }).catch( error => {
      console.error(error);
      res.sendStatus(500)
    })

});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
