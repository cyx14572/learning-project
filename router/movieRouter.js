var express = require('express');
var MovieModel = require('../model/movie');

var router = express.Router();

router.post('/add',(req,res,next)=>{
    var body = req.body;
    MovieModel(body).save().then(info=>{
        if(info){
            res.send('<script>alert("添加成功!"); window.history.back();</script>');
        }
    }).catch(err=>{
        res.send('<script>alert("添加失败!"); window.history.back();</script>');
    })
})

module.exports = router;