/*jshint globalstrict: true*/
'use strict';
angular.module('ControllerModule').controller('HomeController',
  function ($scope, $location, $routeParams, AccountModel) {
    'use strict';
    var accounts = AccountModel.getAccounts();
    var i = 0;
    var color = "";

    if (accounts.length === 0) {
      $location.path('/test');
      return true;
    }

    $scope.accounts = accounts;
    var totalAmount = parseFloat(0);
    for (i = 0; i < accounts.length; i++) {
      totalAmount += parseFloat(accounts[i].accountBalance);
    }
    $scope.totalAssets = totalAmount;
    var pieData = [];
    for (i = 0; i < accounts.length; i++) {
      color = "rgba(" + (255 - i*80) + "," + (20 + i*80) + "," + (i*80) + ",0.5)";
      var val = Math.floor(100 * accounts[i].accountBalance/totalAmount);
      pieData.push({value:val, color:color});
    }

		var barChartData = {
			labels : ["T1","T2","T3","T4","T5","T6","T7"],
			datasets : []
    };

    for (i = 0; i < accounts.length; i++) {
      color = "rgba(" + (255 - i*80) + "," + (20 + i*80) + "," + (i*80) + ",0.5)";
      var data = [];
      var numBars = barChartData.labels.length;
      var limit = accounts[i].transactions.length;
      if (limit < numBars) {
        numBars = limit;
      }
      var start = limit - numBars;
      if (numBars < 1) {
        start = 1;
      }
      for (var j = start; j < limit; j++) {
        data.push(accounts[i].transactions[j].amount);
      }
      barChartData.datasets.push({fillColor:color, strokeColor:color,data:data});

	}

    var myPie = new Chart(document.getElementById("barCanvas").getContext("2d")).Pie(pieData);
	var myLine = new Chart(document.getElementById("pieCanvas").getContext("2d")).Bar(barChartData);
  }
);


