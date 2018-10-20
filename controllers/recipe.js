// const passport = require("../passport/passport");

const router = require("express").Router();

const db = require("../models");
app.use(logger("default"));

app.get("/", function(req,res){
    request("https://www.buzzfeed.com/angelameiquan/20-marijuana-recipes-that-coloradoans-and-washingt-70fn", function(error, response, html){
        var $ = cheerio.load(html);
        var results = [].slice(0, 16);

        $("h3.subbuzz__title").slice(0, 16).map(function(i, element){
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
            console.log(results)
        });

        fs.writeFile("scraped_recipes.json", JSON.stringify(results), function(err){
            if (err) return console.log(err);

            console.log("Scrape was successful");
        });
            res.status(200).json("recipe scraping done");
    })
});

router.get("/", (req, res) => {
    res.json({ recipe: req.recipe })
})
// router.post("/scrape", )