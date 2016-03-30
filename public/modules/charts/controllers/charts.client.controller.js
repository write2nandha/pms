'use strict';

// Charts controller
angular.module('charts').controller('ChartsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Charts',
	function($scope, $stateParams, $location, Authentication, Charts ) {
		$scope.authentication = Authentication;

		// Create new Chart
		$scope.create = function() {
			// Create new Chart object
			var chart = new Charts ({
				name: this.name
			});

			// Redirect after save
			chart.$save(function(response) {
				$location.path('charts/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
		};

		// Remove existing Chart
		$scope.remove = function( chart ) {
			if ( chart ) { chart.$remove();

				for (var i in $scope.charts ) {
					if ($scope.charts [i] === chart ) {
						$scope.charts.splice(i, 1);
					}
				}
			} else {
				$scope.chart.$remove(function() {
					$location.path('charts');
				});
			}
		};

		// Update existing Chart
		$scope.update = function() {
			var chart = $scope.chart ;

			chart.$update(function() {
				$location.path('charts/' + chart._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Charts
		$scope.find = function() {
			$scope.charts = Charts.query();
		};

		// Find existing Chart
		$scope.findOne = function() {
			$scope.chart = Charts.get({ 
				chartId: $stateParams.chartId
			});
		};
	}
]);