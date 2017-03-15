myApp.factory('FactoryFactory', ['$http', function($http) {
  var self = this
//object containers for RETURN
  var factoryExpenditures = { list: [] };
  var monthlyBudget = { list: [] };
  var activeEmployees = { list: [] };

//object containers for THIS
  self.newEmployee = {};
  self.newBudget = {};

//calls functions on start
  getExpenditures();
  getActive();
  getBudget();

  function getExpenditures(){
    $http({
      method: 'GET',
      url: '/expenditures'
    }).then(function(response){
      factoryExpenditures.list = response.data;
    });
  }//end of getExpenditures

  function getActive(){
    $http({
      method: 'GET',
      url: '/activeEmployees'
    }).then(function(response){
      activeEmployees.list = response.data;
      getExpenditures();
    });
  }//end of getActive

  function addEmployee(newEmployee){
    $http({
      method: 'POST',
      url: '/newEmployee',
      data: newEmployee
    }).then(function(response){
      getExpenditures();
      getActive();
    });
  }//end of addEmployee

  function changeStatusInactive(employeeID){
    $http({
      method: 'PUT',
      url: '/inactive/' + employeeID
    }).then(function(response){
      getExpenditures();
      getActive();
    });
  }//end of changeStatusActive

  function changeStatusActive(employeeID){
    $http({
      method: 'PUT',
      url: '/active/' + employeeID
    }).then(function(response){
      getExpenditures();
      getActive();
    });
  }//end of changeStatusInactive


//////BUDGET VIEW is incomplete////////
//budget
  function getBudget(){
    $http({
      method: 'GET',
      url: '/budget'
    }).then(function(response){
      //.list = response.data;
    });
  }//end of getBudget

  function addBudget(newBudget){
    $http({
      method: 'POST',
      url: '/newBudget',
      data: newBudget
    }).then(function(response){
      getBudget();
    });
  }//end of addBudget


//values returned to thier appropriate controllers
  return {
    factoryExpenditures: factoryExpenditures,
    activeEmployees: activeEmployees,
    addEmployee: addEmployee,
    changeStatusInactive: changeStatusInactive,
    changeStatusActive: changeStatusActive,
//budget stuff
    //  : monthlyBudget,
    getBudget: getBudget,
    addBudget: addBudget
  }

}]);//end of myApp.factory
