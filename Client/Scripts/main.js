/// <reference path="../Library/require.d.ts" />
/// <reference path="../Library/angular.d.ts" />
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
            deps: ["angular"],
            exports: "angular-route"
        }
    }
});
require(["angular", "./app"], function (angular) {
    var elem = document.getElementsByName("html")[0];
    angular.bootstrap(elem, "moonflow");
});
//# sourceMappingURL=main.js.map