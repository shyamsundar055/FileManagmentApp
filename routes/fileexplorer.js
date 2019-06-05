var express = require('express');
var fileprocess = require('../models/fileprocess');
var router = express.Router();


router.get('/',(req,res)=>{
    fileprocess.ListFiles('./uploads').then(function(files){
        console.log(files);
        var filesExist = Object.keys(files).length > 0;
        res.render('filedirectory.hbs',{files:files,filesExist:filesExist});
    });
    
});

router.post('/api/upload',function(req,res){
    fileprocess.uploadFile(req,res,(err)=>{
        if(err){
            console.log("comes inside err....",err);
            res.end("Error uploading file");
        }else{
            console.log('file uploaded successfully');
            res.redirect('/');
        }
    });
});

router.delete('/api/delete',function(req,res){
    fileprocess.DeleteFile(req.body.filename).then(function(success){
        if(success){
            console.log('file deleted successfully');
            res.send({status:200,message:"Success"});
        }
    });
});

module.exports = router;