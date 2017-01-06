// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, mainServ) {
  // VARIABLES
  // ==========================================================
  // FUNCTIONS
  // ===========================================================
  var onCompelete = function(response){
    $scope.user = response;
    $scope.error = null;
  }

  var onError = function (reason) {
    console.log(reason.status);
    $scope.user = null;
    $scope.error = "could not fetch the user"
  }

// this promise calls two functions 
  $scope.search = function (username) {
    mainServ.gitHubAPI(username).then(onCompelete, onError)
  };
});
