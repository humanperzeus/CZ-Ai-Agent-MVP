const puppeteer = require('puppeteer');

async function runAgent() {
  // Launch browser
  const browser = await puppeteer.launch({ headless: true }); // Set to false for debugging
  const page = await browser.newPage();

  // Log into X (replace with your test account creds)
  await page.goto('https://x.com/login', { waitUntil: 'networkidle2' });
  await page.type('input[name="text"]', 'your_test_account'); // Your X username
  await page.click('button[type="submit"]');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  await page.type('input[name="password"]', 'your_test_password'); // Your X password
  await page.click('button[type="submit"]');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  // Fetch CZ’s recent posts
  await page.goto('https://x.com/cz_binance', { waitUntil: 'networkidle2' });
  await page.waitForSelector('article'); // Wait for tweets to load
  const posts = await page.evaluate(() => {
    const tweetElements = document.querySelectorAll('article div[lang]');
    return Array.from(tweetElements).map(t => t.textContent).slice(0, 5); // Top 5 posts
  });

  // Simulate ChatGPT-4 reply (replace with real API call later)
  const taggedTweet = 'Hey CZAI, what’s your take on BTC?';
  const context = posts.join('\n');
  const fakeReply = `CZ says: "BTC’s the king—holding strong!" (Based on: ${posts[0]})`;
  console.log('Context Posts:', context);
  console.log('Generated Reply:', fakeReply);

  // Cleanup
  await browser.close();
}

runAgent().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
