//==========Configuration==========//
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/dist'));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//==========Routes==========//
const riotKey = 'XXXXX-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX'

//Get Summoner by Summoner Name
app.get('/summoner/:id', function(req, res, next){
    console.log("*****\nserver.js /summoner/"+req.params.id+"is being called\n*****");
    request({
        uri: `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.id}?api_key=${riotKey}`, 
        function(error, response, body) {}
    }).pipe(res);
    console.log("****\nrequest has resolved\n*****")
});

//Get Matchlist by summoner Id: int of 10
app.get('/matchlist/:id/:start/:stop', function(req, res, next){
    console.log("*****\nserver.js /matchlist/"+req.params.id+"/"+req.params.start+"/"+req.params.stop+" is being called\n*****");
    request({
        uri: `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${req.params.id}?beginIndex=${req.params.start}&endIndex=${req.params.stop}&api_key=${riotKey}`,
        function(error, response, body) { }
        }).pipe(res);
    console.log("****\nrequest has resolved\n*****")
})

//Route not found catch to Angular
app.all("*", (request, response) => { response.sendFile(path.resolve("./public/dist/index.html")) });

app.listen(8000, function () {
    console.log("listening on port 8000");
})