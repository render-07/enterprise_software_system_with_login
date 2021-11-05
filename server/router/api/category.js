const express = require('express');
const router = express.Router();

const Category = require('../../model/Category');

// @route GET api/categories
// @desc Get all item category
// @access Public

router.get('/', (req, res) => {
    Category.find()
        .then(categories => res.json(categories))
})

// @route POST api/categories
// @desc Create item category
// @access Public

router.post('/', (req, res) => {
    const newCategory = new Category({
        categoryID: req.body.categoryID,
        categoryName: req.body.categoryName
    });

    newCategory
        .save()
        .then(category => res.json(category))
        // .catch(err => res.status(404).json( {success: false} ));
})


// @route DELETE api/categories
// @desc DELETE item category
// @access Public

router.delete('/:id', (req, res) => {
    Category.findById(req.params.id)
        .then(category => category.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})


module.exports = router;
