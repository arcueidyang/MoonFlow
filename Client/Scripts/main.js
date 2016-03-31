/**
 * Created by Yang on 3/29/16.
 */

//example: https://medium.com/angularjs-meetup-south-london/angular-using-requirejs-amd-528358208f84#.k6gkodb51
require.config({
    paths: {
        "angular": "Library/angular",
        "angular-route": "Library/angular-route"
    },

    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            deps:["angular"],
            exports: "angular-route"
        }
    }
});

require(["angular", "router"], function(angular) {
   angular.bootstrap(document, ["moonflow"]);
});