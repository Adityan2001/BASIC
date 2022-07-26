const express = require('express');
const http =  require('http');
const morgan = require('morgan');
const bodyParser=require('body-parser');

const hostname = 'localhost';
const port =  3030;

const app = express();  // imprtant line

app.use(morgan('dev'));
app.use(bodyParser.json());

const dishRouter = require('./routes/dishRouter.js');
app.use('/dishes', dishRouter);

const leaderRouter = require('./routes/leaderRouter.js');
app.use('/leaders/',leaderRouter);

const promoRouter = require('./routes/promoRouter.js');
app.use('/promotions/',promoRouter);


//app.use(express.static(__dirname+'/public'));
/*
app.all('/dishes',(req , res , next)=>{
    //console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    next();
    //res.end('<html><body><h1>Express Server</h1></body></html>');
} );

app.get('/dishes',(req,res,next)=>{
    res.end('Will sendd all dishes to you');
});
app.post('/dishes',(req,res,next)=>{
    res.end('IT will create a resource i.e. dishes for you');
});
app.put('/dishes',(req,res,next)=>{
    res.end('NOt supported on '+'/dishes');
});
app.delete('/dishes',(req,res,next)=>{
    res.end('Delete all the dishes on the server ');
});

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will get dish with id:'+req.params.dishId);
});
app.post('/dishes/:dishId',(req,res,next)=>{
    res.end('Post not supoorted on /dishes/:dishId');
});
app.put('/dishes/:dishId',(req,res,next)=>{
    res.end('Updating the dish with Id:'+req.params.dishId);
});
app.delete('/dishes/:disheId',(req,res,next)=>{
    res.end('Will get dish with id:'+req.params.dishId);
});
*/

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log('Server running at http://'+hostname+':'+port);
})