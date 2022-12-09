
const express = require('express');

const wrap = express();

wrap.use((req, res, next)=>{
    console.log('I am in Middleware');
    next();
    res.send('<h1>Hello!</h1>');
})

wrap.listen(3000);


