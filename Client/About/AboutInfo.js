"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AboutInfoComponent = (function () {
    function AboutInfoComponent() {
        this.InitializePersonalInfo();
    }
    AboutInfoComponent.prototype.InitializePersonalInfo = function () {
        this.title = "Yang";
        this.description = [
            "80年代末生人。",
            "少时求学于冀，而后问道于蜀，后赴美帝国主义追求学术和自由。",
            "资本主义的奢侈糜烂没有感受到，却体会到了生活的艰辛。",
            "就职于某不大不小的软件公司。",
            "曾以为遇到这辈子的伴侣，却无奈与佳人失之交臂。",
            "心如死灰之木，身如不系之舟"
        ];
    };
    AboutInfoComponent.prototype.NavigateToFacebook = function () {
        window.open("https://www.facebook.com/richard.yang.3910829", "_blank");
    };
    AboutInfoComponent.prototype.NavigateToGithub = function () {
        window.open("https://github.com/arcueidyang", "_blank");
    };
    AboutInfoComponent = __decorate([
        core_1.Component({
            selector: "AboutInfo",
            template: "./About.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutInfoComponent);
    return AboutInfoComponent;
}());
exports.AboutInfoComponent = AboutInfoComponent;
//# sourceMappingURL=AboutInfo.js.map