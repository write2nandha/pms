'use strict';

//Charts service used to communicate Charts REST endpoints
angular.module('charts').factory('Charts', ['$resource',
	function($resource) {
		return $resource('charts/:chartId', { chartId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

//Charts service used to communicate Charts REST endpoints
angular.module('charts').factory('Dashboards', ['$resource',
	function($resource) {
		return $resource('Dashboards/:chartType', { chartType: 'revenueChart'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
