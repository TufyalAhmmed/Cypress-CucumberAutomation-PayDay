Feature:Document

    @focus
    Scenario:Check that user can upload valid documents properly
    Given Open payday website
    When User logged in with valid credentials
    Then User will see dashboard
    When Click on employee from sidebar
    Then click on all employee from submenu of employee
    And All employee title will display
    When Click on View details for a employee 
    Then Employee details UI will show
    When Click on Documents from left menu in Employee Details UI
    And Click on Add New Button 
    Then Add document UI will appear
    When Input document Name
    And Browse Valid document
    And Click on Save
