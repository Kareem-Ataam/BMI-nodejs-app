const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

//to add bodyParser to our app
app.use(bodyParser.urlencoded({extended:true}));
//Handling GET requets
app.get("/sum", function (req, res){
    res.sendFile(__dirname+"/sum.html");
});
app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

//Handling POST requests
app.post("/sum", function(req, res){
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send("The result is: " + result);
});
app.post("/",function (req, res) {
    var bmi = Number(req.body.weight) / Math.pow(Number(req.body.height),2);
    res.send("The BMI percentage is:" + bmi);
});
app.listen(PORT,function () {
    console.log("Calculator is running on port " + PORT);
});