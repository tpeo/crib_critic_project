const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function getRating(names) {
  const apartment = names.trim().toLowerCase().replace(/\s+/g, '+');
  try {
    //Fetches the webpage
    const response = await fetch(
      "https://www.google.com/search?q=" +
        apartment +
        "&sourceid=chrome&ie=UTF-8"
    );
    //Converts the response to html
    const html = await response.text();
    //Loads the html into a Cheerio object
    const $ = cheerio.load(html);
    //Selects a div that contains a span with an aria-hidden attribute that equals true 
    //(selects the parent div)
    const divWithSpans = $('div').find('span[aria-hidden="true"]').parent();
    //Isolates the rating value within the first span of the text
    var stars = Number.parseFloat(divWithSpans.find('span').eq(0).text());
    //Isolates the number of ratings within the second span of the text
    var numRatings = Number.parseInt(divWithSpans.find('span').eq(2).text().replace(/[^\d]/g, ''))
    //Repeats the process if an error is encountered until a specific answer is found (occasionally gets parsed incorrectly)
    while (isNaN(stars) || isNaN(numRatings)) {
      [stars, numRatings] = getRating(names);
    }
    return [stars, numRatings]
  } catch (error) {
    console.error(error);
  }
}

//Test function (checked and works)
async function main() {
    const larkRating = await getRating("Lark Austin");
    console.log("Lark Austin :::   Stars: ", larkRating[0], ", Number of Ratings: ", larkRating[1]);

    const villasRating = await getRating("Villas on Rio");
    console.log("Villas on Rio ::: Stars: ", villasRating[0], ", Number of Ratings: ", villasRating[1]);

    const ionRating = await getRating("Ion Austin");
    console.log("Ion Austin :::    Stars: ", ionRating[0], ", Number of Ratings: ", ionRating[1]);
}