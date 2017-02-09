(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakow";
  $scope.sayHello = function () {
    return "Hello Coursera";
  }
});

})();
