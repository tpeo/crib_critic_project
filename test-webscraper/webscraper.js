const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function getRating(names) {
  const apartment = names.join("+");
  try {
    const response = await fetch(
      "https://www.google.com/search?q=" +
        apartment +
        "&sourceid=chrome&ie=UTF-8"
    );
    const html = await response.text();
    const $ = cheerio.load(html);
    const innerText = $("span[aria-hidden]").text().trim().substring(0, 3);
    rating = Number.parseFloat(innerText);
    return rating;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
    const larkRating = await getRating(["lark", "austin"]);
    console.log(larkRating);

    const villasRating = await getRating(["villas", "on", "rio"]);
    console.log(villasRating);

    const ionRating = await getRating(["ion", "austin"]);
    console.log(ionRating);
}

main()