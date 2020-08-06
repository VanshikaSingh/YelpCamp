var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs")

app.get("/", function(req, res){
		res.render("landing")
		})

var campgrounds = [
		 {name:"Salmon Creek", image: "https://www.photosforclass.com/download/pb_1827832"},
		 {name:"Granite Hill", image: "https://www.photosforclass.com/download/pb_1626412"},
		{name:"Mountain Goat's rest", image: "https://pixabay.com/get/57e3d04a4b51a914f1dc84609620367d1c3ed9e04e50744076277ddd9349cc_340.jpg"}
	]


app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds" , function(req, res){
	
	//get data from FORM and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	
	campgrounds.push(newCampground);
	
	res.redirect("/campgrounds");
	//redirect back to campgrounds page
	
	
})

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})

app.listen(3000, function(){
	console.log("Its working");
})