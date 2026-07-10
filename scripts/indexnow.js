const https = require('https');

const host = 'wovrex.site';
const key = 'e8f5c3b177d4469f8c1f930df32ef33e';
const keyLocation = `https://${host}/${key}.txt`;

// List of all pages on the site to notify search engines about
const urlList = [
  `https://${host}/`,
  `https://${host}/about`,
  `https://${host}/findings`,
  `https://${host}/how-we-look`
];

const postData = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log(`Pinging IndexNow API with ${urlList.length} URLs...`);

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ IndexNow request successful!');
      console.log('Search engines (Bing, Yandex, etc.) have been notified of your URLs.');
    } else {
      console.error(`❌ IndexNow request failed with status code: ${res.statusCode}`);
      if (responseData) {
        console.error('Response:', responseData);
      }
    }
  });
});

req.on('error', (e) => {
  console.error(`❌ Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
