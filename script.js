var app = angular.module('plunker', []);

app.controller('RateCtrl', function ($scope, $timeout) {
  var ratesRef = new Firebase('https://med-network.firebaseio.com/');
  
  ratesRef.on('value', function (snapshot) {
    $timeout(function () {
      update(snapshot);
    });
  });
  
  function update (snapshot) {
    $scope.rate = snapshot.val();
  }
});
