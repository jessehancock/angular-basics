// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.basicGet = function() {
    return $http({
      method: 'GET',
      url: '/getMessage'
    }).then(function(response) {
      //sends it back as an array and I only want the first one.
      return response.data[0].message;
    });
  }
  // OTHER FUNCTIONS
  // ============================================================

});
