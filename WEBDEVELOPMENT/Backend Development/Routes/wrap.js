
const express = require('express');
const bodyParser = require('body-parser')
const wrap = express();

const adminRoutes = require('./admin');
const shopRoutes = require('./shop');

wrap.use(bodyParser.urlencoded({extended: false}));

wrap.use(adminRoutes);
wrap.use(adminshop);

wrap.use ((req, res, next) =>{
res.status(404).send('<h1>Page Not Found</h1>')
})
wrap.listen(3000);


