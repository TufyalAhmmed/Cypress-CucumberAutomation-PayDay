Feature:Employee Information

    @focus
    Scenario:Check that user can see all the employees in All Employees UI
    Given Open payday website
    When User logged in with valid credentials
    Then User will see dashboard
    When Click on employee from sidebar
    Then click on all employee from submenu of employee
    And All employee title will display

    @focus
    Scenario:Check that newley added employee is showing in All employees UI 
    Given Open payday website
    When User logged in with valid credentials
    Then User will see dashboard
    When Click on employee from sidebar
    Then click on all employee from submenu of employee
    And All employee title will display
    When Click on Add Employee button
    Then Add Employee UI will show
    When fill up the form
    And Click on Add button
    Then Look for 1st employee in All Employess UI