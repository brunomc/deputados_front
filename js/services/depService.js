(function(){
	angular
	.module('appdep')
	.factory('depService',depService);

	depService.$inject = ['$http'];

  //funcoes

  function	depService($http){

  		var _listar = function(){

  			return $http.get('http://localhost:3000/api/data/deputados');
  		}

  		return{

  			listar:_listar
  		}




  }


})();