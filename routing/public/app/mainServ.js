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

  // THIS IS FOR THE REPO CTRL

  this.gitHubSingleRepo = function(username, reponame) {
    return $http({
      method: 'GET',
      url: "https://api.github.com/repos/" + username + "/" + reponame
    }).then(function(response, httpData) {
        return response.data;
    });
  }

  this.gitHubContributors = function(username, reponame) {
    return $http({
      method: 'GET',
      url: "https://api.github.com/repos/" + username + "/" + reponame + "/contributors"
    }).then(function(response) {
        return response.data;
    });
  }
  // OTHER FUNCTIONS
  // ============================================================

});
