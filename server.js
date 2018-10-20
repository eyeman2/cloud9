const dotenv = require('dotenv').config(); // Used to connect to .env file that holds passwords or things that you don't want shared.//
const express = require('express'); // used as server 
const path = require("path");
const session = require("express-session"); //Holds information from the Session ID but not the cookies
const MongoStore = require("connect-mongo")(session);  //MongoDB session store for Connect and Express
const mongoose = require('mongoose'); // Is a MongoDB object modeling tool designed to work in an asynchronous environment
const bodyParser = require('body-parser'); 
const logger = require('morgan');  
const cheerio = require('cheerio'); 
const request = require('request');
const fs = require('fs');


const routes = require('./controllers');
const passport = require("./passport/passport")

const PORT = process.env.PORT || 3001;
const app = express();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/marijuanaDB');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Passport
app.use((session({
    secret: "I 4m 4bs0lut3ly aw3s0m3!",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
})))

app.use(passport.initialize());
app.use(passport.session());


// For scraping
app.use(logger("default"));

app.get("/recipes", function(req,res){
    request("https://www.buzzfeed.com/angelameiquan/20-marijuana-recipes-that-coloradoans-and-washingt-70fn", function(error, response, html){
        var $ = cheerio.load(html);
        var results = [];
        // .slice(0, 16)

        $("h3.subbuzz__title").each(function(i, element){
            var title = $(element).children("span").text().split(".")[1];
            var image = $(element).siblings("figure").find("img").attr("data-src");
            var link = $(element).siblings("figure").find("big").find("a").attr("href");
            
            if (title == '') {
                return
            }
            if (link == undefined) {
                return
            }
            results.push({
                title: title,
                image: image,
                link: link
            });
            
        }).slice(0,16)
        
        console.log(results)
        fs.writeFile("./client/src/scraped_recipes.json", JSON.stringify(results), function(err){
            if (err) return console.log(err);

            console.log("Scrape was successful");
        });
            res.status(200).json("recipe scraping done");
    })
});

app.get("/events", function(req, res){
    // if(!"data-original"){
    //   return "src"
    // }
    request("https://www.everfest.com/unique/cannabis-festivals", function(error, response, html){
      var $ = cheerio.load(html);
      var results = [];
  
      $("span.js-festival-fav-unfav-container").each(function(i, element){
        var title = $(element).siblings("a").children("div.festival-card__footer").find("span.festival-card__title").text();
        var date = $(element).siblings("a").children("div.festival-card__footer").find("span.festival-card__date").text();
        var place = $(element).siblings("a").children("div.festival-card__footer").find("span.festival-card__location").text();
        var image = $(element).siblings("a").children("img").attr("src");
        var link = $(element).siblings("a").attr("href");
        var alt = $(element).siblings("a").children("img").attr("alt");
  
        
        results.push(
          { title: title,
            image: image,
            link: link,
            date: date,
            place: place,
            alt: alt
          }
        )
        ;

      }).slice(0,16)
      console.log(results); 
      fs.writeFile("./client/src/events36.json", JSON.stringify(results), function(err){
          
        if (err) console.log(err);
  
        // console.log("Scrape transfer was successful");
      });
      res.status(200).json("scrape done");
    });
  });

app.use(routes);  

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`)
})