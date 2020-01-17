var test = require("./database");
var User = require('./User');
var Post = require('./Post');


var alex = new User({
    name: 1
});

var joe = new User({
    name: "Joe"
})

alex.save();
joe.save();
var hello = new Post({
	title:"jgjhgjh"
});
hello.save();


/*
var post = new Post({
    title: "Hello World",
    postedBy: alex._id,
    comments: [{
        text: "Nice post!",
        postedBy: joe._id
    }, {
        text: 1,
        postedBy: alex._id
    }]
})


post.save(function(error) {
    if (!error) {
        Post.find({})
            .populate('postedBy')
            .populate('comments.postedBy')
            .exec(function(error, posts) {
                console.log(JSON.stringify(posts, null, "\t"))
            })
    }
});*/