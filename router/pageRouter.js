
var express = require('express');
var MovieModel = require('../model/movie');
const router = express.Router();

router.get('/list',(req,res,next)=>{
    MovieModel.find().sort({_id:-1}).then(infos=>{
        res.render('list',{
            movieList:infos
        });
    });
});

router.get('/detail/:id', (req,res,next)=>{
    var id = req.params.id;
    MovieModel.findOne({_id:id}).then(info=>{
        console.log(info);
        res.render('detail',{
            movieDetail:info
        });
    });
});

router.get('/admin',(req,res,next)=>{
    console.log(1);
    res.render('admin');
});

module.exports = router;