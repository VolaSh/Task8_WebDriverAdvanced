const StartPage = require('../../pages/start_page');
const MentoringPrograms = require('../../pages/mentoring_programs');
const HelpPage = require('../../pages/help_page');

describe('a simple test for LEARN portal', () => {
    it('should open the LEARN portal', () => {
        const pageToTest = new StartPage();
        pageToTest.goToPage('https://learn.epam.com/explore?filter=~(sorting~(field~%27RATING~isDescending~true))&tab=catalog');
        pageToTest.getPageTitle('Learn');
    });

    it('should search for mentoring programs', () => {
        const pageToTest = new StartPage(); 
        pageToTest.enterValue(pageToTest.searchField, 'Mentoring');

        pageToTest.checkValue(pageToTest.searchField, 'mentoring');      
    });

    it('should select one of the available programs', () => {
        const pageToTest = new MentoringPrograms(); 
        pageToTest.clickElement(pageToTest.htmlCssMentoringProgram);
        pageToTest.checkElementVisibility(pageToTest.htmlCssMentoringProgramTitle);
    });

    it('should filter all Software Testing courses that are available in English', () => {
        const pageToTest = new StartPage(); 
        pageToTest.openNewWindow('https://learn.epam.com/explore?filter=~(sorting~(field~%27RATING~isDescending~true))&tab=catalog');
        const pageToTest2 = new MentoringPrograms(); 
        pageToTest2.clickElement(pageToTest2.expandCategoryOptions);
        pageToTest2.enterValue(pageToTest2.categorySearchField, 'software');
        pageToTest2.clickElement(pageToTest2.softwareTestingCategory);
        pageToTest2.clickElement(pageToTest2.selectButton);
        pageToTest2.clickElement(pageToTest2.englishLanguage);
        pageToTest2.checkElementVisibility(pageToTest2.softwareTestingIntroductionEngCourse);
    });    
});