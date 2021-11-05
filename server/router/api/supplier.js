const express = require('express');
const router = express.Router();

const Supplier = require('../../model/Supplier');

// @route GET api/suppliers
// @desc Get all suppliers
// @access Public

router.get('/', (req, res) => {
    Supplier.find()
        .then(supplier => res.json(supplier))
})

// @route POST api/suppliers
// @desc Create new supplier
// @access Public

router.post('/', (req, res) => {
    const newSupplier = new Supplier({
        supplierID: req.body.supplierID,
        supplierName: req.body.supplierName
    });

    newSupplier
        .save()
        .then(supplier => res.json(supplier))
        // .catch(err => res.status(404).json( {success: false} ));
})


// @route DELETE api/suppliers
// @desc DELETE supplier
// @access Public

router.delete('/:id', (req, res) => {
    Supplier.findById(req.params.id)
        .then(supplier => supplier.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})


module.exports = router;
