var express = require('express');
var mime = require('mime');
var multer = require('multer');
var path = require('path');
var router = express.Router();
var fs = require('fs');
var jimp = require('jimp');

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

maxSize = 100000000;
//multer upload file extension filter for spam prevention
var upload = multer({ storage: storage,
	fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    ext = ext.toLowerCase();
    if (ext != '.jpg' && ext !== '.jpeg') {
      return cb(null, false)
    }

    cb(null, true)
  }
}).single('image');

//get home page
router.get('/', function(req, res, next) {
  res.render('index');
});

//file upload post request
router.post('/upload',upload, function(req,res){
    var type = req.body.type;
    console.log(req.file);
    name = req.file.originalname;
    buffer = req.file.buffer;
    fs.writeFile('./public/user_images/'+name, buffer, 'binary', function(err) {
        if(err) throw err;
        else{res.redirect('/show?name='+name+'&type='+type)}
    });

});

router.get('/show', function(req, res){
    name = req.query.name;
    type = req.query.type;
    res.render('viewer',{
        name:name,
        type:type
    });
    // setTimeout(function(){
    //     fs.unlink('./public/user_images/'+name, function(err, stats){
    //         if(err) console.log(err);
    //         else console.log(stats);
    //     });
    // },5000)
})

router.post('/projectfolder',function(req, res){

var dir = req.body.name;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
});
module.exports = router;
