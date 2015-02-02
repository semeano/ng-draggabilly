(function () {

	'use strict';

	var dependencies = ['ng-draggabilly'];

	angular.module('ngDraggabillyDemo', dependencies)

		/* @ngInject */
		.controller('ngDraggabillyDemoCtrl', function ($scope) {

			// Fixed on X axis
			$scope.xfixed = {};
			$scope.xfixed.axis = 'x';

			// Fixed on Y axis
			$scope.yfixed = {};
			$scope.yfixed.axis = 'y';

			// Inside container
			$scope.contained = {};
			$scope.contained.containment = true;

			// Snap to grid
			$scope.grid = {};
			$scope.grid.grid = [50,50];

			// With an handle
			$scope.handle = {};
			$scope.handle.handle = '.handle-zone';

			// Events
			$scope.events = {};
			// Drag start
			$scope.events.dragStart = function (instance, event, pointer) {
				var output = 'DRAG START' +
										 '<br>' +
										 event.type + ' at ' +
										 pointer.pageX + ',' + pointer.pageY +
										 '<br>' +
										 'element position at ' + instance.position.x + ',' + instance.position.y;
				document.getElementById('events-console').innerHTML = output;
			};
			// Drag move
			$scope.events.dragMove = function (instance, event, pointer) {
				var output = 'DRAG MOVE' +
										 '<br>' +
										 event.type + ' at ' +
										 pointer.pageX + ',' + pointer.pageY +
										 '<br>' +
										 'element position at ' + instance.position.x + ',' + instance.position.y;
				document.getElementById('events-console').innerHTML = output;
			};
			// Drag end
			$scope.events.dragEnd = function (instance, event, pointer) {
				var output = 'DRAG END' +
										 '<br>' +
										 event.type + ' at ' +
										 pointer.pageX + ',' + pointer.pageY +
										 '<br>' +
										 'element position at ' + instance.position.x + ',' + instance.position.y;
				document.getElementById('events-console').innerHTML = output;
			};

		});

})();