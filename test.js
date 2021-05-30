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
  $radio.click();
  $idInput.sendKeys("gusdn0217");
  $pwInput.sendKeys("Patent6783!", Key.ENTER);

  // 목록 검색
  await driver.wait(until.elementLocated(By.className("row")), 10000);
  let eventList = await driver.findElements(
    By.css("#list > tbody > tr > td:last-child")
  );

  // 목록 접속
  let itemList = {};
  let c = 0;

  await eventList[0].click();
  await console.log("Dsdfsdfsfehlloo");
  let ccc = "/html/body/div[2]/a[1]/span";
  let t = driver.findElement(By.xpath("/html/body/div[2]/a[1]/span"));
  await console.log(t.getText());

  /*
  await eventList.forEach(async (eventt) => {
    //eventt.click();
    
    await console.log("Dsdfsdfsfehlloo");
    let ccc = "/html/body/div[2]/a[1]/span";
    let t = driver.findElement(By.xpath("/html/body/div[2]/a[1]/span"));
    await console.log(t.getText());

    console.log(t.getText());
    await driver.navigate().back();

    console.log("????");
    await driver.wait(until.elementLocated(By.className("row")), 10000);
  });
  */
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

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

run();
