console.log("Hello World!")
var request = require("request");
var Twitter = require("twitter");
var inquirer = require("inquirer");


var command = process.argv[2];
var userName = process.argv[3];


var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});
   
var params = {screen_name: userName, count: 2};
client.get('statuses/user_timeline', params, function(error, tweetsArr, response) {
    if (!error) {
        for(var i=0; i < tweetsArr.length; i++) {
            console.log(tweetsArr[i].created_at);
            console.log(tweetsArr[i].text);
        };
    }
});
