Feature: Demo Login Feature

  Scenario: Test scenario 001 - expect PASSED
    Given user is on Login page
    When user login with valid credential
    Then Account page shows account info
    
  Scenario: Test scenario 002 - expect PASSED
    Given user is on Login page
    When user login with valid credential
    Then Account page shows account info   
    And user can click comfirm button 