var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm7.staticflickr.com/6038/6852069312_51bf522f46.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla tempor enim et luctus. Cras tempor sapien nisi, et ornare ipsum faucibus in. Proin a tristique orci. Fusce semper ac diam at accumsan. Vestibulum massa felis, cursus sed eros a, maximus placerat tellus. Pellentesque ante neque, mattis eget justo ut, dictum pulvinar arcu."
            
        },
        {
            name: "Desert Mesa",
            image: "https://farm4.staticflickr.com/3688/9522451433_12c8b1e12c.jpg",
            description: "Mauris porttitor neque porttitor turpis molestie hendrerit. Nullam vitae tellus malesuada, lobortis ipsum ut, varius risus. Duis vel quam quam. Donec ultricies nisi lorem, a aliquet ipsum bibendum sed. Suspendisse blandit varius enim, vestibulum blandit sem maximus eget. Integer id mi rhoncus, vulputate orci at, aliquam dolor."
            
        },
        {
            name: "Canyon Floor",
            image: "https://farm2.staticflickr.com/1569/26499041625_71f57c8ca4.jpg",
            description: "Ut eget enim faucibus neque vulputate tincidunt ut eget ligula. Cras a nulla et tortor maximus fringilla. Morbi tempus velit id sodales pharetra. Ut mollis, nisi id pretium dapibus, mi libero tempus sapien, eu pulvinar nulla justo ac ligula. Proin porta, massa porttitor varius sollicitudin, nisi turpis efficitur nunc, ac tincidunt turpis erat nec sem."
            
        }
        
    ]

function seedDB(){
//Remove all campgrounds
Campground.deleteMany({}, function(err){
    if(err){
        console.log(err);
    }   else {
            console.log("removed campgrounds!");
      
//add a few campgrounds 

    data.forEach(function(seed){

      Campground.create(seed, function(err, campground){
              if(err){
                  console.log(err);
              } else {
                  console.log("added a campground");
                  
                  //create a comment
                    Comment.create(
                     {
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                     }, function(err, comment){
                         if(err){
                             console.log(err);
                         } else {
                             campground.comments.push(comment); 
                             campground.save();
                             console.log("Created new comment");
                         }
                     }
                    )
              }
      }); 
    });
        }   
});


}

module.exports = seedDB;