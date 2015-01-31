#ngDraggabilly - drag and drop for angular

A simple angular wrapper for [Draggabilly](https://github.com/desandro/draggabilly).

There're similar packages already, but there's mainly two things makes this one different.

One is that is has an isolated scope.

The other is that it doesn't use $rootScope to emit drag and drop events. This way you if you have several draggable elements, it will only fire once for the one that you dragged, instead of fireing many times as the number of draggable elements.

###Install

    bower install ng-draggabilly

###How to use

Add the attribute directive *ng-draggabilly* to the element, set an object with the options and another with the events.

Add dependency:

    angular.module('yourApp', ['ng-draggabilly']);

Add to index.html:

    <script src="bower_components/ng-draggabilly/src/ng-draggabilly.js"></script>

View:

    <div ng-draggabilly options="opts" events="evts"></div>

Controller:

    $scope.opts = {
        // use Draggabilly options here
    };
    
    $scope.evts = {
        dragStart = function (instance, event, pointer) {
            // whatever you want to do on dragstart event
        },
        dragMove = ...,
        dragEnd = ...
    }

###Demo

[Here's](https://semeano.github.io/ng-draggabilly) a demo with many draggable elements with different options.
