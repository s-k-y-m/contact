var axios = require('axios');
const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3005/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('component rendering correctly', async () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('initial title is correct', async () => {
    var logo = '.logo';
    const title = await page.$eval(logo, e => e.textContent);
    expect(title).toEqual('Zagat');
  });

  test('there exists a div with class contact-container', async () => {
    var contactClass = '.contact-container';
    const contactContainer = await page.$eval(
      contactClass,
      el => (el ? true : false)
    );
    expect(contactContainer).toBe(true);
  });
});

describe('User interaction working correctly', () => {
  test('See More button clicked', async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
    await page.click('.chevron');
  });

  test('Color changes on hover', async () => {
    await page.hover('.openNowOneLine');
  });

  test('Modal appears when expand map clicked', async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
    await page.click('button');
    await page.waitForSelector('.modals');
  });
});

describe('Containing correct inner elements', () => {
  test('check if contact container has the correct divs', async () => {
    const data = await page.evaluate(() => {
      const restaurants = Array.from(
        document.querySelectorAll('.contact-container > div')
      );
      console.log(restaurants);
      return restaurants.map(restaurant => restaurant.className);
    });
    expect(data[0]).toEqual('restaurant-times');
    expect(data[1]).toEqual('restaurant-address');
    expect(data[2]).toEqual('restaurant-phoneNumber');
    expect(data[3]).toEqual('restaurant-website');
    expect(data[4]).toEqual('restaurant-directions');
    expect(data[5]).toEqual('restaurant-googleMap');
    expect(data[6]).toEqual('restaurant-map');
  });
});
