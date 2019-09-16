var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "http://www.wearemoviegeeks.com/wp-content/uploads/WTCLibertyStatePark-HighRes-PhotoCreditErikaKoop-012.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Desert Mesa", 
        image: "https://www.northeastern.edu/careers/blog/wp-content/uploads/2016/10/seattle.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Canyon Floor", 
        image: "http://platinumworld.net/platinum-signature-experiences/wp-content/uploads/2017/08/324488-1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        
        console.log("Removed all");
        
        Comment.remove({}, function(err){
            if(err){
                console.log(err);
            }
            console.log("Removed comments");
        
        
            data.forEach(function(seed){
                Campground.create(seed, function(err, newCampground){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("Added a campground");
                        
                        Comment.create(
                            {
                                text: "dehfkdjovikv",
                                author: "Sachin"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    newCampground.comments.push(comment._id);
                                    newCampground.save();
                                    console.log("Comment created");
                                }
                            });
                    }
                    
                    
                    
                });
            });
            
        });
    });
}

module.exports = seedDB;
