// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.gitHubAPI = function(username) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username
    }).then(function(response, httpData) {
      // THIS IS MY best attempt at error handling.
      // TODO: GET HELP ON ERROR HANDLING FOR HTTP requests
      if(response.status != 200){
        console.log(response.status);
        return response.status
      }
      else {
        return response.data
      }
    }, function (error) {
      console.log(error.status);
      console.log('query failed.');
    });
  };
  // OTHER FUNCTIONS
  // ============================================================



});
