var express = require("express");
var app = express();

//visiting root page
app.get("/", function(req, res){
    res.send("Hi there, welcome to my express routing demo page");
});

//visiting 'animals' page
app.get("/speak/:animalName", function(req, res){
    var animalN = req.params.animalName;
    var animalSound;
    if(animalN === "pig"){
        animalSound = "Oink";
    }
    
    else if (animalN === "cow"){
        animalSound = "Moo";
    }
    
    else if (animalN === "dog"){
        animalSound = "Woof Woof!";
    }
    
    else{
        animalSound = "Sorry, no sound found";
    }
    res.send("The " + animalN + " says " + "'" + animalSound + "'")
});

//visiting word print page
app.get("/repeat/:word/:count", function(req, res){
    var num = Number(req.params.count);
    var wordCont = req.params.word;
    var result = "";
    for(var i = 0; i < num; i++){
       result += wordCont + " "; 
    }
    res.send(result);
});

//visting every other thing else
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});


//Tell Express to listen for request(start over)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED!!!");
});