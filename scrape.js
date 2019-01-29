const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://yelp.com');
  await page.screenshot({path: 'example.png'});
  const h2 = await page.evaluate(
    () => document.querySelector("h2").textContent
  );
  console.log(h2);

  
  await browser.close();
})();
