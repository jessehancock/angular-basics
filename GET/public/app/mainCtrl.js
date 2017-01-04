// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, mainServ) {
  // VARIABLES
  // ============================================================
  // $scope.messeage = 'sample'
  // FUNCTIONS
  // ============================================================
  (function () {
    console.log('h1');
    mainServ.basicGet().then(function(response){
      console.log(response);
      $scope.message = response
    })
  }());
});
