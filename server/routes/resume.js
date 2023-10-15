const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController')

router.get('/fetch-pdf', resumeController.getResume)

router.post('/create-pdf', resumeController.createResume)