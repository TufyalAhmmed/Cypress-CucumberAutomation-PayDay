class locatorsPage{

  
    // login page

    email = '//input[@id="formData.email"]'
    password = '//input[@id="formData.password"]'
    login = '//span[@class="w-100"]'

    dashboard = '//h4[normalize-space()="Dashboard"]'
    punchIn = '//button[normalize-space()="Punch In"]'
    punchInModal = '//h4[normalize-space()="Punch In"]'
    punchInDT = '//p[normalize-space()="Punch In date & time:"]'
    punchOutDT = '//p[normalize-space()="Punch Out date & time:"]'
    ip = '//label[normalize-space()="IP:"]'
    punchInNote = '//textarea[@id="description"]'
    mpunchIn = '//span[normalize-space()="Punch In"]'
    punchOut = '//button[normalize-space()="Punch Out"]'
    mpunchOut = '//span[normalize-space()="Punch Out"]'


    // Employee
    employee = '//span[normalize-space()="Employee"]'
    allEmployee = '//a[normalize-space()="All Employees"]'
    allEmployeeTitle = '//h4[normalize-space()="All Employees"]'

    addEmployee = '//button[normalize-space()="Add Employee"]'
    addemploye = '//h4[normalize-space()="Add Employee"]'
    eFName = '//input[@id="formData.first_name"]'
    eLName = '//input[@id="formData.last_name"]'
    eEmail = '//input[@id="formData.email"]'
    rMale = '(//label[normalize-space()="Male"])[2]'
    department = '//select[@id="formData.department_id"]'
    desig = '//select[@id="formData.designation_id"]'
    EStatus = '//select[@id="formData.employment_status_id"]'
    eRole = '//div[@id="dropdownMenuLink"]'
    fRole = '(//a[normalize-space()="Employee"])[3]'
    salary = '//input[@id="formData.salary"]'
    jDate = '//input[@placeholder="Enter joining date "]'
    eAdd = '//span[normalize-space()="Add"]'
    fEmp = '(//div[@class="card-body position-relative d-flex flex-column justify-content-between"])[1]'


    viewDetail = '(//a[normalize-space()="View details"])[2]'
    eDetails = '//h4[normalize-space()="Employee Details"]'
    doc = '//span[normalize-space()="documents"]'
    dAddNew = '//button[normalize-space()="Add New"]'
    addDocu = '//h4[normalize-space()="Add Document"]'
    dName = '//input[@id="formData.name"]'
    sDoc = '//label[normalize-space()="Enter document"]'
    saveDoc = '//span[normalize-space()="Save"]'
    br = '//input[@id="formData.file"]'


    
    
    }
    export default locatorsPage;