const {TestStep} = require('kite-common');

class OpenUrlStep extends TestStep {
  constructor(kiteBaseTest) {
    super();
    this.driver = kiteBaseTest.driver;
    this.timeout = kiteBaseTest.timeout;
    this.url = kiteBaseTest.url;
    this.uuid = kiteBaseTest.uuid;
    this.page = kiteBaseTest.page;
  }

  stepDescription() {
    return 'Open ' + this.url + '';
  }

  async step() {
    await this.page.open(this);
    await this.page.clickStart(this);
    await this.page.waitForVideos(this);
  }
}

module.exports = OpenUrlStep;
