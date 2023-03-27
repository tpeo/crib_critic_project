import fetch from 'node-fetch';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import {db} from './firebase.mjs';

// async function getApartmentRatings(apartmentName) {
//   const apartment = apartmentName.trim().toLowerCase().replace(/\s+/g, '+');
//   const url = "https://www.google.com/search?q=" + apartment + "&sourceid=chrome&ie=UTF-8";
  
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
    
//     await page.goto(url, { waitUntil: 'networkidle2' });
//     await page.waitForSelector('div.g');
    
//     const ratingText = await page.$eval('div[aria-label^="Rated"]', el => el.textContent);
//     const reviewText = await page.$eval('span[jsname="fk8dgd"]', el => el.textContent);
    
//     const rating = parseFloat(ratingText.match(/[\d|.]+/));
//     const reviewCount = parseInt(reviewText.replace(/[^\d]/g, ''));
    
//     await browser.close();
    
//     return [rating, reviewCount];
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }



// async function getApartments() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.google.com/search?sa=X&tbs=lf:1,lf_ui:2&tbm=lcl&q=west+campus+apartments&rflfq=1&num=10&ved=2ahUKEwiSwNPM9fz9AhV1nGoFHdR6A2QQjGp6BAhmEAI&biw=1440&bih=900&dpr=2#rlfi=hd:;si:;mv:%5B%5B30.294223,-97.7412775%5D,%5B30.2835274,-97.7527688%5D%5D;start:0');
  
//   const results = [];
  
//   for (let i = 0; i < 4; i++) {
//     await page.waitForSelector('.dbg0pd');
    
//     const apartmentNames = await page.$$eval('.dbg0pd', apartments => {
//       return apartments.map(apartment => apartment.textContent.trim());
//     });
    
//     results.push(...apartmentNames);
    
//     const nextButton = await page.$('#pnnext');
//     console.log(nextButton);
    
//     if (nextButton) {
//       await nextButton.click();
//       await page.waitForNavigation();
//     } else {
//       break;
//     }
//   }
  
//   await browser.close();
//   results.forEach(e => addDocument(e));
//   // results.forEach(e => addDocument(e))
// }

// getApartments();

// function addDocument(name) {
//   const collectionRef = db.collection('apartments');
//   const data = {};
//   collectionRef
//     .doc(name)
//     .set(data)
//     .then(() => {
//       console.log(`Document with ID ${name} written successfully`);
//     })
//     .catch((error) => {
//       console.error("Error adding document:", error);
//     });
// }

// function addRatings() {
//   const collectionRef = db.collection('apartments');
//   collectionRef.get().then(querySnapshot => {
//     querySnapshot.forEach(async doc => {
//         var values = await getApartmentRatings(doc.id);
//         console.log(values);
//         // doc.ref.update(values)
//     });
//   })
// }



async function getApartments() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?sa=X&tbs=lf:1,lf_ui:2&tbm=lcl&q=west+campus+apartments&rflfq=1&num=10&ved=2ahUKEwiSwNPM9fz9AhV1nGoFHdR6A2QQjGp6BAhmEAI&biw=1440&bih=900&dpr=2#rlfi=hd:;si:;mv:%5B%5B30.294223,-97.7412775%5D,%5B30.2835274,-97.7527688%5D%5D;start:0');
  const results = [];
  
  for (let i = 0; i < 4; i++) {
    console.log(1);
    await page.waitForSelector('dbg0pd');
    console.log(1);
    const apartments = await page.$$('.cXedhc');
    
    for (const apartment of apartments) {
      const name = await apartment.$('span.OSrXXb', title => title.textContent.trim());
      const ratingEl = await apartment.$('span[aria-hidden="true"]');
      const rating = ratingEl ? await ratingEl.evaluate(el => Number.parseFloat(el.getAttribute("aria-label"))) : null;
      const numRatingsEl = await apartment.$('span:nth-child(4)');
      const numRatings = numRatingsEl ? await numRatingsEl.evaluate(el => Number.parseInt(el.textContent.replace(/[^\d]/g, ''))) : null;
      results.push({name, rating, numRatings});
    }
    
    const nextButton = await page.$('#pnnext');
    
    if (nextButton) {
      await nextButton.click();
      await page.waitForNavigation();
    } else {
      break;
    }
  }

  await browser.close();
  // results.forEach(e => addDocument(e));
  console.log(results);
}


// async function addRatings() {
//   try {
//     const apartmentsRef = db.collection('apartments');
//     const querySnapshot = await apartmentsRef.get();

//     const promises = [];

//     querySnapshot.forEach(async (doc) => {
//       // const promise = getApartmentRatings(doc.id).then((values) => {
//       //   if (values) {
//       //     return doc.ref.update(values);
//       //   }
//       // console.log()
//       // });
//       console.log(doc.id)
//       console.log(await getApartmentRatings(doc.id));
//       // promises.push(promise);
//     });

//     // await Promise.all(promises);
//   } catch (error) {
//     console.error(error);
//   }
// }

getApartments();