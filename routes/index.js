
const express = require("express");
const router = express.Router();



router.get('/', (req,res,next)=>{
    res.status(200).json({
        message : "This is home ,almero."
    })
    //console.log('almero')
});



module.exports = router;

