// Use of ui-router is much easier than the router angular

angular.module('app', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/main');

	$stateProvider
	.state('main', {
    url: '/main',
		controller: 'mainCtrl',
    templateUrl: './app/main/main.html'
   })
  .state('repo', {
    url: '/repo/:username/:reponame',
		controller: 'repoCtrl',
    templateUrl: './app/repo/repo.html'
   })
   .state('user', {
    url: '/user/:username',
    templateUrl: './app/user/user.html',
		controller: 'userCtrl'
   })
}])
