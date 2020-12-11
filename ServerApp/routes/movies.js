var express = require('express')
var router = express.Router();
var mysql = require('mysql')
var data = require('./data')

router.get('/get',function(req,res){
    res.send(data)
  })
 
router.get('/getData', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
              

 var con = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'movieapp'
  })

  con.connect(function(err){
      if(err){
          console.log("db conn error")
      }
      else {
      console.log("connected successfully to db")
      var q  = "SELECT * FROM `moviedetails` WHERE 1"
     con.query(q,function(e,r){
         if(e){
             console.log(e)
             res.send(e)
         }
         else{
            res.send(r)
         }
        
        
     })
    }
    })

    
})

module.exports = router;