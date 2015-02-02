(function (Draggabilly) {

	'use strict';

	angular.module('ng-draggabilly', [])

		.directive('ngDraggabilly', function () {

			// Linker function
			function linker(scope, element) {

				// Create Draggabilly object
				var draggie = new Draggabilly(element[0], scope.options);

				// Drag start
				if (scope.events && scope.events.dragStart) {
					draggie.on('dragStart', scope.events.dragStart);
				}

				// Drag move
				if (scope.events && scope.events.dragMove) {
					draggie.on('dragMove', scope.events.dragMove);
				}

				// Drag end
				if (scope.events && scope.events.dragEnd) {
					draggie.on('dragEnd', scope.events.dragEnd);
				}
			}

			return {
				restrict: 'A',
				link: linker,
				scope: {
					options: '=',
					events: '='
				}
			};
	});

})(window.Draggabilly);