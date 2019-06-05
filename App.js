var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var filexplorer = require('./routes/fileexplorer');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:true}));
app.set("views","views");
app.set("view engine","hbs");

app.use('/api/upload',filexplorer);
app.use('/api/download',filexplorer);
app.use('/api/delete',filexplorer);
app.use('/',filexplorer);

app.listen(8080,()=>{
    console.log("Server running in 8080");
});



