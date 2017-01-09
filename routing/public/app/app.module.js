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
    url: '/repo',
    templateUrl: './app/repo/repo.html'
   })
   .state('user', {
    url: '/user/:username',
    templateUrl: './app/user/user.html',
		controller: 'userCtrl'
   })
}])
