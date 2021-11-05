const express = require('express');
const router = express.Router();

const Item = require('../../model/Item');

// @route GET api/items
// @desc Get all items
// @access Public

router.get('/', (req, res) => {
     Item.find()
        .then(items => res.json(items))
})

// @route POST api/items
// @desc Create item
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        price: req.body.price,
        categoryID: req.body.categoryID,
        supplierID: req.body.supplierID
    });

    newItem
        .save()
        .then(item => res.json(item))
        // .catch(err => res.status(404).json( {success: false} ));
})

module.exports = router;