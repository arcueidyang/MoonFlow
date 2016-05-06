"use strict";
var Article = (function () {
    function Article(id, title, content) {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.TimeCreated = new Date();
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=Article.js.map