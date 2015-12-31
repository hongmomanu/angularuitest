angular.module('starter', ['ui.router','ui.bootstrap'])


.config(function($stateProvider, $urlRouterProvider) {
  /**
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/main.html"
    })
    .state('state1', {
      url: "/state1",
      templateUrl: "templates/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "templates/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "templates/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "templates/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });

    **/

    $stateProvider
        .state('index', {
          url: "",
          views: {
            "viewA": { templateUrl: "templates/index.viewA.html" },
            "viewB": { templateUrl: "templates/index.viewB.html" }
          }
        })
        .state('route1', {
          url: "/route1",
          views: {
            "viewA": { templateUrl: "templates/route1.viewA.html" ,controller: function($scope) {

                $scope.name="route1viewA";
                console.log("rA");

      }},
            "viewB": { templateUrl: "templates/route1.viewB.html",controller: function($scope) {

                $scope.name="route1viewB";

                console.log("rB");
      } }
          }
        })
        .state('route2', {
          url: "/route2",
          views: {
            "viewA": { templateUrl: "templates/route2.viewA.html" },
            "viewB": { templateUrl: "templates/route2.viewB.html" }
          }
        })

});




;
