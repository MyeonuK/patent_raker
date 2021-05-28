const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const run = async () => {
  const service = new chrome.ServiceBuilder("./chromedriver").build();
  chrome.setDefaultService(service);

  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("http://patent.ordernow.kr/login.php");

  // 로그인
  const $radio = await driver.findElement(By.className("check"));
  const $idInput = await driver.findElement(By.id("login_id"));
  const $pwInput = await driver.findElement(By.id("login_pw"));
  (await $radio).click();
  (await $idInput).sendKeys("gusdn0217");
  (await $pwInput).sendKeys("Patent6783!", Key.ENTER);

  // 목록 검색
  await driver.wait(until.elementLocated(By.className("row")), 10000);
  let eventList = await driver.findElements(
    By.css("#list > tbody > tr > td:last-child")
  );

  // 목록 접속
  let itemList = {};
  let c = 0;
  await eventList.forEach(async (eventt) => {
    await eventt.click();
    console.log("11111111");
    await driver.wait(until.elementLocated(By.className("row")), 10000);
    //c++;
    //let itemList = driver.findElements(By.css(".row > div > table > tr"));
    //console.log(itemList.length);
    /*
    let count = 0;

    if (itemList != undefined) {
      itemList.forEach((item) => {
        if (
          item.findElement(toggleSelector).getAttribute("selected") != undefined
        ) {
          count += 1;
        }
      });
    }
    */
    console.log("Dsdfsdfsfehlloo");
    await driver.navigate().back();

    console.log("????");
    await driver.wait(until.elementLocated(By.className("row")), 10000);
  });
  //await console.log("SDdssdsfdsfdsfsdfdsfdf");
  //await console.log(c);

  //await console.log(count);

  //////////////끝
  /*
  setTimeout(async () => {
    await driver.quit();
    process.exit(0);
  }, 3000);
  */
};
run();
