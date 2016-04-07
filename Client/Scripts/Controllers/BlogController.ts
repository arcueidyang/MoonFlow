import angular = requrie("angular");

export class BlogController {
    private Articles: Array<any>;

    constructor() {
        this.Articles = [];

    }

    private InitAricles() {
        this.Articles.push({
            title: "My First article"
        });
        this.Articles.push({
            title: "My Second article"
        });
        this.Articles.push({
            title: "My Third article"
        });
    }

    private GetArticles() {
        //todo
    }

    private GetArticle(id: string) {
        //todo
    }
}