import fetch from 'node-fetch';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

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


async function getApartments() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(
      "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&q=west+campus+apartments&rflfq=1&num=10&sa=X&ved=2ahUKEwiB0riRwPr9AhVVnWoFHUe9DBgQjGp6BAhoEAI&biw=1440&bih=900&dpr=2#rlfi=hd:;si:;mv:%5B%5B30.295229699999997,-97.7413794%5D,%5B30.2827637,-97.7509692%5D%5D;tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
    );

    // Wait for the page to load
    await page.waitForSelector(".dbg0pd");

    // Extract the apartment names
    const apartmentNames = await page.$$eval(".dbg0pd", (apartments) =>
      apartments.map((apartment) => apartment.textContent.trim())
    );
    console.log(apartmentNames);

    await browser.close();
  }
  catch (error) {
    console.log(error);
  }
}

//Test function (checked and works)
// async function main() {
//     const larkRating = await getRating("Lark Austin");
//     console.log("Lark Austin :::   Stars: ", larkRating[0], ", Number of Ratings: ", larkRating[1]);

//     const villasRating = await getRating("Villas on Rio");
//     console.log("Villas on Rio ::: Stars: ", villasRating[0], ", Number of Ratings: ", villasRating[1]);

//     const ionRating = await getRating("Ion Austin");
//     console.log("Ion Austin :::    Stars: ", ionRating[0], ", Number of Ratings: ", ionRating[1]);
// }

getApartments();