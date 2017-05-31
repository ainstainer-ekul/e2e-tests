 Feature: RestApi

    Scenario: User can test a rest api
        When I create rest client with 'https://staging.university4industry.com' base url
        Then should see 'en-US' language after sending '/api/user' request