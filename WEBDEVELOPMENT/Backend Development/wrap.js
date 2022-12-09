
const express = require('express');
const bodyParser = require('body-parser')
const wrap = express();

wrap.use(bodyParser.urlencoded({extended: false}));

wrap.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type = "text" name="title"><button type="button">Click Me!</button> <h1>Hello!</h1>');
})

wrap.use('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

wrap.use('/', (req, res, next)=>{
    res.send('<h1>Hello zeee</h1>');
    next();
})


wrap.listen(3000);


