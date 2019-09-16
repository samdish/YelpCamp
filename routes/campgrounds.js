var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

// Index

router.get("/",function(req,res){
    
    Campground.find({}, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index",{campgrounds:foundCampground});
        }
    });
    
});

// Create
router.post("/",isLoggedIn, function(req,res){
    
    var name = req.body.name;
    var url = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    
    var campground = {name: name, image: url, description: description, author: author};
    //campgrounds.push(campground);
    Campground.create(campground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/campgrounds");
        }
    });
    
    
    //res.send("Posting");
});


// New
router.get("/new", isLoggedIn, function(req,res){
   res.render("campgrounds/new"); 
});


// Show
router.get("/:id", function(req, res) {
    var id = req.params.id;
    console.log("shuru");
    console.log(id);
    console.log("khatam");
    //Campground.findById(req.params.id, function(err, foundCampground){
    Campground.findById(id).populate("comments").exec(function(err, foundCampground){
    if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("foundCampground");
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    //res.render("show");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;

module.exports = router;