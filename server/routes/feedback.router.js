const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {query} = require('../modules/pool');

router.post('/', (req, res) => {
    let query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [req.body.feeling, req.body.understanding, req.body.supported, req.body.comments])
    .then(response => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error in POST:', error)
    })
})

module.exports = router;