// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, mainServ) {
  // VARIABLES
  // ==========================================================
  // FUNCTIONS
  // ===========================================================
  var onError = function (reason) {
    $scope.error = "could not fetch the user"
  }

  $scope.search = function (username) {

    mainServ.gitHubAPI(username).then(function(response, onError){
      console.log(response);
      if(isNaN(response) )$scope.user = response;
      else console.log('ehlo');
    })
  };
});
