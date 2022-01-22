//jshint eversion:6

const express = require("express");
// const bodyParser = require("body-parser");
// body-parser used when new information is being stored
const app = express();

// app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public"));


//app.get("/css/styles.css", function(req,res){
    //res.sendFile("/css/styles.css");
//});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running");
});

