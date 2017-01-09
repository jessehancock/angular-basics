// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, $interval, $location) {
  // VARIABLES
  // ==========================================================
  console.log('mainCtrl');
  $scope.countdown = 5;
  $scope.username = 'jessehancock';
  // FUNCTIONS
  // ===========================================================
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
    if (countdownInterval) {
      $interval.cancel(countdownInterval);
      $scope.countdown = null;
    }
    $location.path("/user/" + username);
  };
});
