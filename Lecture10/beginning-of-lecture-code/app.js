(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();

// minified code from http://www.minifier.org/
//(function(){'use strict';angular.module('DIApp',[]).controller('DIController',['$scope','$filter',DIController]);function DIController($scope,$filter){$scope.name="Yaakov";$scope.upper=function(){var upCase=$filter('uppercase');$scope.name=upCase($scope.name)}}})()
