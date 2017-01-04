// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.gitHubAPI = function() {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/jessehancock'
    }).then(function(response) {
      console.log(response);
      return response.data;
    });
  }
  // OTHER FUNCTIONS
  // ============================================================

});
