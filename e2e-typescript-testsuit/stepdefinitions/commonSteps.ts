import { MainPage } from '../pages/mainPage';
import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import * as rm from 'typed-rest-client/RestClient';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({When, Then}) {
    let mainPage: MainPage = new MainPage();

    When(/^I press '(.*)' button on \[(.*)\] page$/, (button: string, page: string) => {

        if(page=='Main'){
            mainPage.pressButton(button);
        }
        else{
            throw new SyntaxError(page + " - unsupported page"); 
        }
    });

    Then(/^should see '(.*)' title page$/, (expectedTitle:string) => {
        return expect(browser.getTitle()).to.eventually.equal(expectedTitle);
    });

    Then(/^should see '(.*)' page url$/, (expectedUrl:string) => {
        return expect(browser.getCurrentUrl()).to.eventually.equal(expectedUrl);
    });
})
