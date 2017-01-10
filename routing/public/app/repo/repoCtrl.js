// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("repoCtrl", function($scope, $stateParams, mainServ) {
  // VARIABLES
  // ==========================================================
  $scope.reponame = $stateParams.reponame;
  $scope.username = $stateParams.username;


  // FUNCTIONS
  // ==========================================================
  var onSingleReposCompelete = function(response){
    $scope.repo = response;
    $scope.error = null;
      mainServ.gitHubContributors($scope.username, $scope.reponame).then(onContributors, onError)
  }

  var onContributors  = function (response) {
      $scope.contributors = response;
    }

  var onError = function (reason) {
    $scope.error = "could not fetch the data";
  }

  mainServ.gitHubSingleRepo($scope.username, $scope.reponame).then(onSingleReposCompelete, onError);
});
