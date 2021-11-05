const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    helpers.getRecipeById()
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
