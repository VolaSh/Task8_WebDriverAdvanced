const StartPage = require("./start_page");

class HelpPage extends StartPage {
    constructor() {
        super();
    this.learnInFiveSteps = $('//div[text()="LEARN in 5 Steps"]');
    };
};

module.exports = HelpPage;