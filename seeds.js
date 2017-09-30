var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Cloud Rest",
    image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
    description: "Cras vel placerat elit, et tincidunt enim. Suspendisse elementum, velit eget bibendum sollicitudin, eros ante luctus erat, in sodales purus ligula ac nibh. Vivamus eleifend nec erat vitae tincidunt. Etiam elit justo, condimentum nec nunc nec, tincidunt convallis ante. Pellentesque euismod, urna et aliquet gravida, nunc leo varius lorem, vitae scelerisque neque urna vel tellus. Praesent non arcu mauris. Integer a tempor ligula. Integer vestibulum dolor et purus consequat, a gravida magna sollicitudin. Pellentesque nec volutpat tellus, quis pharetra odio. Donec eu metus sed velit vestibulum pretium. Duis viverra rutrum eros, sed pharetra dui faucibus id. Sed et nisl vel mauris convallis blandit. Morbi quis ornare tellus. "
    },
    {name: "Mountain Peak",
    image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
    description: "Cras vel placerat elit, et tincidunt enim. Suspendisse elementum, velit eget bibendum sollicitudin, eros ante luctus erat, in sodales purus ligula ac nibh. Vivamus eleifend nec erat vitae tincidunt. Etiam elit justo, condimentum nec nunc nec, tincidunt convallis ante. Pellentesque euismod, urna et aliquet gravida, nunc leo varius lorem, vitae scelerisque neque urna vel tellus. Praesent non arcu mauris. Integer a tempor ligula. Integer vestibulum dolor et purus consequat, a gravida magna sollicitudin. Pellentesque nec volutpat tellus, quis pharetra odio. Donec eu metus sed velit vestibulum pretium. Duis viverra rutrum eros, sed pharetra dui faucibus id. Sed et nisl vel mauris convallis blandit. Morbi quis ornare tellus. "
    },
    {name: "Creepy Bog",
    image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
    description: "Cras vel placerat elit, et tincidunt enim. Suspendisse elementum, velit eget bibendum sollicitudin, eros ante luctus erat, in sodales purus ligula ac nibh. Vivamus eleifend nec erat vitae tincidunt. Etiam elit justo, condimentum nec nunc nec, tincidunt convallis ante. Pellentesque euismod, urna et aliquet gravida, nunc leo varius lorem, vitae scelerisque neque urna vel tellus. Praesent non arcu mauris. Integer a tempor ligula. Integer vestibulum dolor et purus consequat, a gravida magna sollicitudin. Pellentesque nec volutpat tellus, quis pharetra odio. Donec eu metus sed velit vestibulum pretium. Duis viverra rutrum eros, sed pharetra dui faucibus id. Sed et nisl vel mauris convallis blandit. Morbi quis ornare tellus. "
    },
];

function seedDB(){
    Campground.remove({}, function(err) {
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground!");
                    Comment.create(
                    {
                        text: "This place is great",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });

}

module.exports = seedDB;