//route-level middleware

const express = require("express");
const router = express.Router();

//middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log("Time: " , Date.now())
    next()
})

//define the home page route
router.get('/', function(req,res){
    res.send ("birds home page")
})

//define about route
router.get('/about', function(req,res){
    res.send ("about birds")
})

module.exports = router;
