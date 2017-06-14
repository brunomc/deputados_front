(function(){
	angular
	.module('appdep')
	.controller('depController',depController);

depController.$inject = ['depService','$scope'];

	function depController(depService,$scope){
		$scope.deputados =[];
		$scope.listar = function(){
			depService.listar().then(function successCallback(data) {
				$scope.deputados = data.data;
				console.log($scope.deputados);
				
			},function errorCallback(response) {

				//$scope.deputados = {"Erro":"Não foi possivel retornar lista de deputados"};
    
 			})




		}
	}
})();