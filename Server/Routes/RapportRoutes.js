
const express = require('express');
const { UpdateDataRapport, deletedDataRapport, GetAllDataRapport, AddRapport } = require('../Controllers/RapportController');
const router = express.Router()

router.post('/', AddRapport)

router.get('/', GetAllDataRapport )

router.delete('/:id',deletedDataRapport )

router.put('/:id', UpdateDataRapport )

module.exports = router

