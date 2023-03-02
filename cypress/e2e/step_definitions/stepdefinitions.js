import { Given,When, And ,Then } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data";

const locator =new locatorsPage();
const data  = new Data();



Given('Open payday website',() => {
    cy.visit(data.URL);
    cy.wait(2000);
})
When('User logged in with valid credentials',() => {
    cy.xpath(locator.email).type(data.Email)
    cy.xpath(locator.password).type(data.PASSWORD)
    cy.xpath(locator.login).click()

})
When('User will see dashboard',() => {
    cy.wait(2000)
    cy.xpath(locator.dashboard).should('be.exist');
    cy.xpath(locator.dashboard).should('be.visible');
    cy.wait(5000)
   
})

When('User should be able to see punch in button',() => {
    cy.xpath(locator.punchIn).should('be.exist');
    cy.xpath(locator.punchIn).should('be.visible');
   
})
When('Click on Punch In Button',() => {
    cy.xpath(locator.punchIn).click({force:true})
   
})
When('Punch In modal will open',() => {
    cy.xpath(locator.punchInModal).should('be.exist');
    cy.xpath(locator.punchInModal).should('be.visible');
})
When('Punch In date & time will show',() => {
    cy.xpath(locator.punchInDT).should('be.exist');
    // cy.xpath(locator.punchInDT).should('be.visible');

})
When('Punch out date & time will show',() => {
    cy.xpath(locator.punchOutDT).should('be.exist');
    // cy.xpath(locator.punchInDT).should('be.visible');

})
When('Will show IP',() => {
    cy.xpath(locator.punchInDT).should('be.exist');
    cy.xpath(locator.punchInDT).should('be.visible');

})
When('Input valid punch in note in Punch In Note section',() => {
    cy.xpath(locator.punchInNote).should('be.exist');
    cy.xpath(locator.punchInNote).type('Punced In')

})
When('empty punch in note in Punch In Note section',() => {
    cy.xpath(locator.punchInNote).should('be.exist');
    cy.xpath(locator.punchInNote).type('')

})
When('Input valid punch out note in Punch Out Note section',() => {
    cy.xpath(locator.punchInNote).should('be.exist');
    cy.xpath(locator.punchInNote).type('Punced Out')

})
When('Click on modal Punch In Button',() => {
    cy.xpath(locator.mpunchIn).click({force:true})
    cy.wait(5000)
})
When('click on punchOut',() => {
    cy.xpath(locator.punchOut).click({force:true})
    cy.wait(5000)
})
When('Click on modal Punch out Button',() => {
    cy.xpath(locator.mpunchOut).click({force:true})
})
When('Click on employee from sidebar',() => {
    cy.xpath(locator.employee).click({force:true})
})
Then('click on all employee from submenu of employee',() => {
    cy.xpath(locator.allEmployee).click({force:true})
})
Then('All employee title will display',() => {
    cy.wait(2000)
    cy.xpath(locator.allEmployeeTitle).should('be.exist')
    cy.xpath(locator.allEmployeeTitle).should('be.visible')
    cy.wait(2000)
})
Then('Click on Add Employee button',() => {
    cy.xpath(locator.addEmployee).should('be.exist')
    cy.xpath(locator.addEmployee).should('be.visible')
    cy.xpath(locator.addEmployee).click({force:true})
    cy.wait(2000)
})
Then('Add Employee UI will show',() => {
    cy.xpath(locator.addemploye).should('be.exist')
    cy.xpath(locator.addemploye).should('be.visible')
    cy.wait(2000)
    
})
Then('fill up the form',() => {
    cy.xpath(locator.eFName).type(data.FirstName)
    cy.wait(2000)
    cy.xpath(locator.eLName).type(data.LastName)
    cy.wait(2000)
    cy.xpath(locator.eEmail).type(data.mail)
    cy.wait(2000)
    cy.xpath(locator.rMale).click({force:true})
    cy.wait(2000)
    cy.xpath(locator.department).select(1)
    cy.wait(2000)
    cy.xpath(locator.desig).select(1)
    cy.wait(2000)
    cy.xpath(locator.EStatus).select(1)
    cy.wait(2000)
    cy.xpath(locator.eRole).click({force:true})
    cy.wait(2000)
    cy.xpath(locator.fRole).click({force:true})
    cy.wait(2000)
    cy.xpath(locator.salary).type(data.Salary)
    cy.wait(2000)
    cy.xpath(locator.jDate).type(data.JoiningDate)
    

    
})
Then('Click on Add button',() => {
    cy.xpath(locator.eAdd).click({force:true})
    
})
Then('Look for 1st employee in All Employess UI',() => {
    cy.xpath(locator.fEmp).should('be.exist')
    
})
Then('Click on View details for a employee',() => {
    cy.xpath(locator.viewDetail).click({force:true})
    
})
Then('Employee details UI will show',() => {
    cy.xpath(locator.eDetails).should('be.exist')
    cy.xpath(locator.eDetails).should('be.visible')
    
})
Then('Click on Documents from left menu in Employee Details UI',() => {
    cy.xpath(locator.doc).click({force:true})
  
    
})
Then('Click on Add New Button',() => {
    cy.xpath(locator.dAddNew).click({force:true})
  
    
})
Then('Add document UI will appear',() => {
    cy.xpath(locator.addDocu).should('be.exist')
    cy.xpath(locator.addDocu).should('be.visible')
    
})

Then('Input document Name',() => {
    cy.xpath(locator.dName).type('Documents 1')
})
Then('Browse Valid document',() => {
    cy.xpath(locator.br).should('not.be.disabled')
    cy.wait(3000)
    const imagefile = 'up.png'
    cy.xpath(locator.br).attachFile(imagefile)
    cy.wait(5000)
})
Then('Click on Save',() => {
    cy.xpath(locator.saveDoc).click({force:true})
    
})







