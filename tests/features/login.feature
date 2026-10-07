Feature: Verify login

Verify user is able to login with valid and invalid credentials 
Scenario: Verify user is able to login with valid credentials

Given I navigate to "https://practice.expandtesting.com/notes/app/login"
When I enter my email "testlogicielemmanuel@gmail.com"
When I enter my password "123456"
And I click on the button login
Then I should see "My Note" 