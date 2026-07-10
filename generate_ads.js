const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const artifactDir = 'C:\\\\Users\\\\muaaz\\\\.gemini\\\\antigravity-ide\\\\brain\\\\cde28b3f-f791-47d2-b4a1-471b2590ed3c';
  const htmlPath = 'file:///' + artifactDir.replace(/\\\\/g, '/') + '/ad_graphics.html';
  
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  
  // Give fonts a moment to ensure they're fully rendered
  await page.waitForTimeout(2000);

  // Select elements
  const squareLocator = page.locator('#ad-square');
  const landscapeLocator = page.locator('#ad-landscape');

  // Screenshot specifically those elements
  await squareLocator.screenshot({ path: path.join(artifactDir, 'wovrex_ad_square.png') });
  await landscapeLocator.screenshot({ path: path.join(artifactDir, 'wovrex_ad_landscape.png') });

  await browser.close();
  console.log('Successfully generated wovrex_ad_square.png and wovrex_ad_landscape.png');
})();
