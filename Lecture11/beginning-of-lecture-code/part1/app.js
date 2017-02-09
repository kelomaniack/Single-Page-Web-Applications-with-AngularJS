(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healty snacks at night!";
  };
}

})();