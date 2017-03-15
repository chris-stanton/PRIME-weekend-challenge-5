myApp.controller('ExpendituresController', ['FactoryFactory', function(FactoryFactory) {
  //console.log('ExpendituresController');
 var self = this;
 self.message = 'Expenditures Controller';
 //line sources from Factory.Factory.js to HTML view
 self.expendituresList = FactoryFactory.factoryExpenditures;
 self.activeEmployeeList = FactoryFactory.activeEmployees;
 self.montlyExpenditure = 0;
 self.newEmployee = {};


//adds new employee to the database
self.addEmployee = function(){
  FactoryFactory.addEmployee(self.newEmployee);
//empties out input fields on submit
  self.newEmployee = {};
};// end of self.addEmployee

//expenditure for all active eployees
self.calculateExpenditure = function(){
  var totalSalary = 0;
  for (var i = 0; i < self.activeEmployeeList.list.length; i++) {
    totalSalary += self.activeEmployeeList.list[i].annual_salary;
  }
  self.monthlyExpenditure = totalSalary / 12;
  return self.monthlyExpenditure
};//end of self.calculateExpenditure

//button -- inactive
self.statusChangeInactive = function(employeeID){
  FactoryFactory.changeStatusInactive(employeeID);
};//end of self.statusChangeInactive

//button -- active
self.statusChangeActive = function(employeeID){
  FactoryFactory.changeStatusActive(employeeID);
};//end of self.statusChangeActive


//budget WIP
self.calculateBudget = function(){
  //self.budget = DataFactory.monthlyBudget.list;
};//end of self.calculateBudget
self.newBudget = {};
self.budget = FactoryFactory.monthlyBudget;

}]);//end of myApp.controller
