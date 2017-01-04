// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, mainServ) {
  // VARIABLES
  // ============================================================
  // $scope.messeage = 'sample'
  // FUNCTIONS
  // ============================================================
  (function () {
    mainServ.gitHubAPI().then(function(response){
      console.log(response);
      $scope.user = response;
    })
  }());
});
