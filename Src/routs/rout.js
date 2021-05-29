const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const controllerEndoints = require('../controllers/controllerEndoints'); 

// 3.
router.get('/algorithms', controllerEndoints.thirdlarg); 
router.get('/algorithms/:anagram', controllerEndoints.anagram); 
// 4. 
module.exports = router; 