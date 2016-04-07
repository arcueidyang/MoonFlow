var AboutController = (function () {
    function AboutController() {
        this.InitBasicInfo();
    }
    AboutController.prototype.InitBasicInfo = function () {
        this.Name = "Yang";
        this.ThumbnailUrl = "https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfa1/v/t1.0-9/538592_130030760476037_941423373_n.jpg?oh=dfb00bf5802823c0f34340b300bf5894&oe=574DF47F";
        this.Introduction = [
            "80年代末生人。",
            "少时求学于冀，而后问道于蜀，后赴美帝国主义追求学术和自由。",
            "资本主义的奢侈糜烂没有感受到，却体会到了生活的艰辛。",
            "就职于某不大不小的软件公司。",
            "曾以为遇到这辈子的伴侣，却无奈与佳人失之交臂。",
            "心如死灰之木，身如不系之舟"
        ];
    };
    AboutController.prototype.NavigateToFacebook = function () {
        window.open("https://www.facebook.com/richard.yang.3910829", "_blank");
    };
    AboutController.prototype.NavigateToGithub = function () {
        window.open("https://github.com/arcueidyang", "_blank");
    };
    return AboutController;
})();
exports.AboutController = AboutController;
//# sourceMappingURL=AboutController.js.map