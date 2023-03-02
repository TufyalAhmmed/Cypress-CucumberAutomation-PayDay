Feature:Punch

   @focus
    Scenario:Check that user can punch in with PunchIn note

    Given Open payday website
    When User logged in with valid credentials
    Then User will see dashboard
    And User should be able to see punch in button
    When Click on Punch In Button
    Then Punch In modal will open 
    And Punch In date & time will show
    And Will show IP
    And Input valid punch in note in Punch In Note section
    And Click on modal Punch In Button  
    And click on punchOut
    And Click on modal Punch out Button

    @focus
    Scenario:Check that user can punch in without punch in note 

    Given Open payday website
    When User logged in with valid credentials
    Then User will see dashboard
    And User should be able to see punch in button
    When Click on Punch In Button
    Then Punch In modal will open 
    And Punch In date & time will show
    And Will show IP
    # And empty punch in note in Punch In Note section
    And Click on modal Punch In Button
    # And click on punchOut
    # And Click on modal Punch out Button

    @focus
     Scenario:Check that user can punch out with punch out note

    Given Open payday website
    When User logged in with valid credentials
    Then User will see dashboard
    And click on punchOut
    And Punch out date & time will show
    And Input valid punch out note in Punch Out Note section
    And Click on modal Punch out Button
    When Click on Punch In Button
     And Click on modal Punch In Button

      @focus
     Scenario:Check that user can punch out with punch out note

    Given Open payday website
    When User logged in with valid credentials
    Then User will see dashboard
    And click on punchOut
    And Punch out date & time will show
    # And Input valid punch out note in Punch Out Note section
    And Click on modal Punch out Button
   



