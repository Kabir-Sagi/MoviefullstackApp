var express = require('express')
var router = express.Router();
var mysql = require('mysql')

router.get('/demodata',function(req,res){
    res.send("<h2>Welcome to JS</h2>")
})
 
router.post('/sendata', function(req,res){
               var n = req.body.name;
               var e = req.body.email;
               var m = req.body.mobileno;
               var c = req.body.city;
               console.log(n)

 var con = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'demodb'
  })

  con.connect(function(err){
      if(err){
          console.log("db conn error")
      }
      else {
      console.log("connected successfully to db")
      var q  = "INSERT INTO `students`( `name`, `mobno`, `email`, `city`) VALUES ('"+n+"',"+m+",'"+e+"','"+c+"')"
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