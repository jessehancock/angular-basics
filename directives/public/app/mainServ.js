// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.gitHubUser = function(username) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username
    }).then(function(response, httpData) {
        return response.data;
    });
  };

  this.gitHubRepos = function(repoUrl) {
    return $http({
      method: 'GET',
      url: repoUrl
    }).then(function(response, httpData) {
        return response.data;
    });
  };
  // OTHER FUNCTIONS
  // ============================================================

});
