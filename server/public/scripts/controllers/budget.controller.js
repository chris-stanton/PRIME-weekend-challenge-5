
//////BUDGET VIEW is incomplete////////////

myApp.controller('BudgetController', ['FactoryFactory', function(FactoryFactory) {
  // console.log('BudgetController');
  var self = this;
  self.message = "Budget Controller";
  self.newBudget = {};

//line sources from Factory.Factory.js to HTML view
  self.budget = FactoryFactory.monthlyBudget;

  self.addBudget = function(){
    FactoryFactory.addBudget(self.newBudget);
    console.log('bc.button click');
  };//end of self.addBudget

}]);//end of myApp.controller
