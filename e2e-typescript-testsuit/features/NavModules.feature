Feature: NavModules

    
    Scenario: User can open Features page
        When I press 'Features' button on [Main] page
        Then should see 'https://angular.io/features.html' page url
  

    Scenario: User can open Docs page
        When I press 'Docs' button on [Main] page
        Then should see 'https://angular.io/docs/ts/latest/' page url
      
      
    @skip
    Scenario: User can open Events page
        When I press 'Events' button on [Main] page
        Then should see 'https://angular.io/events.html' page url
      



      