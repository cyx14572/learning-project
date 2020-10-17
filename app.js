var express = require('express');
var mongoose = require('mongoose');
var { host, port, mongoUrl } = require('./config/config');

var pageRouter = require('./router/pageRouter');
var movieRouter = require('./router/movieRouter');

var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

// app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('./public'));

//渲染页面
app.use('/', pageRouter);
app.use('/movie', movieRouter);


mongoose.connect(mongoUrl, { useNewUrlParser: true,useUnifiedTopology: true }, err => {
    if (err) {
        console.log('数据连接失败');
        return;
    }

    console.log('数据连接成功');
    app.listen(port,host,err=>{
        if(err){
            console.log('服务器启动失败');
            return;
        }
        console.log('服务器启动成功！！！')
    })
})