class StartPage {
    
    constructor() {
    this.searchField = $('//input[@class="uui-input"]');
    this.startTab = $('//div[text()="Start"]');
    this.helpTab = $('//div[text()="Help"]');

    };

    goToPage(url) {
        browser.url(url);
    };

    getPageTitle(name) {
        expect(browser).toHaveTitle(name);
    };

    enterValue(element, text) {
        element.addValue(text);
    };

    checkValue(element, value) {
        expect(element).toHaveValue(value, { ignoreCase: true });
    };

    clickElement(element) {
        element.click();
    };

    checkElementVisibility(element) {
        const visibility = element.isDisplayed();
        expect(visibility);
    };

    openNewWindow(url) {
        browser.newWindow(url);
    };

    clickButton(buttonName) {
        browser.keys([buttonName]);
    };

    clickLeftMouseButton(element) {
        element.click({ button: 'left' });
    };

    moveToElement(element) {
        element.moveTo();
    };

    pause(time) {
        browser.pause(time);
    };
   
};

module.exports = StartPage;