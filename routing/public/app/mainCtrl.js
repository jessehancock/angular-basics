// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, $interval, mainServ) {
  // VARIABLES
  // ==========================================================
  $scope.repoSortOrder = '-stargazers_count';
  $scope.countdown = 5;
  $scope.username = 'jessehancock';
  // FUNCTIONS
  // ===========================================================
  var onUserCompelete = function(response){
    $scope.user = response;
    $scope.error = null;
    console.log(response.repos_url);
    (function() {
      mainServ.gitHubRepos($scope.user.repos_url).then(onRepos, onError)
    }())
  }

  var onRepos = function (response) {
    $scope.repos = response;
  }

  var onError = function (reason) {
    $scope.user = null;
    $scope.repos = null;
    $scope.error = "could not fetch the data";
  }

  var decrementCountDown = function(){
    $scope.countdown--
    if($scope.countdown < 1){
      $scope.countdown = null;
      $scope.search($scope.username);
    }
  };

  var countdownInterval = null;
  var startCountDown = function(){
    countdownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
  }();
// this promise calls two functions
  $scope.search = function (username) {
    mainServ.gitHubUser(username).then(onUserCompelete, onError);
    if (countdownInterval) {
      $interval.cancel(countdownInterval);
      $scope.countdown = null;
    }
  };
});
