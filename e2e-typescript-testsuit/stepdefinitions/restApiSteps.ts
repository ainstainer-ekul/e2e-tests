import { defineSupportCode } from 'cucumber';
import { RootObject }  from '../utils/restObjects/User';
import * as rm from 'typed-rest-client/RestClient';
import { browser } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let assert = chai.assert;

defineSupportCode(function ({When, Then}) {

        let restClient: rm.RestClient;

        When(/^I create rest client with '(.*?)' base url$/, (baseUrl: string) => {
             restClient = new rm.RestClient('rest-samples', 'https://staging.university4industry.com')
        });

        Then(/^should see '(.*)' language after sending '(.*)' request$/, (expectedLanguage: string, entryPoint: string) => {
            return expect( restClient.get<RootObject>(entryPoint).then(function(response){
                    return response.result.user.language;
                }).catch(function(response){
                    return assert.fail(response, expectedLanguage, expectedLanguage + ' - language is absent for ' + entryPoint + ' request');
                })).to.eventually.equal(expectedLanguage);
        });  
})
