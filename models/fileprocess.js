var fs = require("fs");
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null,'./uploads');
    },
    filename: function(req,file,callback){
        callback(null,file.originalname);
    }
});

var uploadFile = multer({storage:storage}).single('file');

function ListFiles(directoryPath){
    var listOfFiles = [];
    return new Promise(function(resolve,reject){
        fs.readdir(directoryPath,(err,files)=>{
            if(err){
                reject(err); 
            }
            else{
                files.forEach(file=>{
                    var fileDetails = fs.statSync(directoryPath+'/'+file);
                    var modifiedDate = fileDetails.mtime.toLocaleString();
                    var size = fileDetails.size/1024;
                    var name = file;
                    listOfFiles.push({name:name,modifiedDate:modifiedDate,size:size});

                });
                resolve(listOfFiles);
            }
        });

    });
    
}

function DeleteFile(fileName){
    return new Promise(function(resolve,reject){
        fs.unlink('./Uploads/'+fileName,(err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(true);
            }
        })
    });
}

module.exports= {ListFiles,uploadFile,DeleteFile};