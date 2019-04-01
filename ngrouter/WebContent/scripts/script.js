var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider, $locationProvider) {
            	$routeProvider.caseInsensitiveMatch = true; 

            	
            	$routeProvider
                .when("/Overview", {
                    templateUrl: "Templates/Overview.html",
                    controller: "OverviewController"
                })
                .when("/Repositories", {
                    templateUrl: "Templates/Repositories.html",
                    controller: "RepositoriesController"
                })
                .when("/Stars", {
                    templateUrl: "Templates/Stars.html",
                    controller: "StarsController"
                })
                .when("/Followers", {
                    templateUrl: "Templates/Followers.html",
                    controller: "FollowersController"
                })
                .when("/Following", {
                    templateUrl: "Templates/Following.html",
                    controller: "FollowingController"
                })                
                .otherwise({
                	redirectTo: "/Repositories"
                })

            })
            .controller("OverviewController", function ($scope) {
                $scope.Overviewmsg = "Overview Page discription";
            })
            .controller("RepositoriesController", function ($http, $route, $scope) {
            	
            	
            	$scope.Repositoriesmsg = "Repositories Page";
            	
            	 $http.get("https://api.github.com/users/supreetsingh247/repos")
     			.then(function (response) {
     				$scope.repos = response.data;	
     			});
            	
            	 $scope.showobj =function(l){
                 	$scope.temp=typeof(l);
                 	if(typeof(l) =="string"){
                 		return true;
                 	}
                 	else{
                 	    return false;
                 	}
                	}
                
            })
            .controller("StarsController", function ($scope) {
                $scope.Starsmsg = "Stars Page";
            })
            .controller("FollowersController", function ($scope) {
                $scope.Followersmsg = "Followers Page";
            })
            .controller("FollowingController", function ($scope) {
                $scope.Followingsmsg = "Following Page";
            })
            .controller("userdetailsController", function ($http, $route, $scope) {
            	
                $scope.userdetailssmsg = "userdetails Page";
               
                $http.get(" https://api.github.com/users/supreetsingh247")
                .then(function (response) {
                    $scope.user = response.data;
                });
                
                $scope.showobj =function(l){
                	$scope.temp=typeof(l);
                	if(typeof(l) =="string"){
                		return true;
                	}
                	else{
                	    return false;
                	}
               	}
                
            })
           
            
            