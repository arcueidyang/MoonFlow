/// <reference path="../Library/require.d.ts" />
/// <reference path="../Library/angular.d.ts" />


//https://arnhem.luminis.eu/using-typescript-angular-require-and-existing-javascript-libraries-the-great-altogether/

require.config({
    paths: {
        "angular": "../Library/angular",
        "angular-route": "../Library/angular-route"
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

require(["angular", "./Scripts"], function(angular) {
   var elem = document.getElementsByName("html")[0];
    angular.bootstrap(elem, "moonflow");
});