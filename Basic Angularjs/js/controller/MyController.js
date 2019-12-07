app.controller('MyController', ['$scope', function($scope) {
	$scope.list = ["GTX 650ti", "GTX 1050ti", "GTX 1650ti"];
	$scope.addNewGraphics=function(){
		$scope.list.push($scope.addGraphics);
	}
}]);