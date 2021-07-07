const StartPage = require("./start_page");

class MentoringPrograms extends StartPage {
    constructor() {
        super();
    this.htmlCssMentoringProgram = $('//div[@class="BigCard_headerCaption__zpa2N"]').$('//div[text() = "HTML CSS Mentoring Program"]');
    this.htmlCssMentoringProgramTitle = $('//div[text()="HTML CSS Mentoring Program"]');
    this.expandCategoryOptions = $('//div[text()="SHOW ALL 122 CATEGORIES"]');
    this.categorySearchField = $('input[class="uui-input _1djZg _28khP _371ux"]');
    this.softwareTestingCategory = $('//div[text()="Software Testing"]');
    this.selectButton = $('//div[text()="Select"]');
    this.englishLanguage = $('//div[text()="English"]');
    this.softwareTestingIntroductionEngCourse = $('//div[text()="Software Testing Introduction (ENG)"]');
    }
};

module.exports = MentoringPrograms;