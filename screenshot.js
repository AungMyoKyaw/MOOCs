const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  const page = await browser.newPage();
  const viewport = {
    width: 2560,
    height: 1600,
    deviceScaleFactor: 2,
  };
  await page.setViewport(viewport); // set screen size to MacBook Pro 13 inch (M1)

  const filePath = path.join(__dirname, 'dist/index.html');
  const url = `file://${filePath}`;

  await page.goto(url);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'assets/screenshot.png' });

  await browser.close();
})();
