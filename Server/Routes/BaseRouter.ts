/// <reference path="../../typings/express/express.d.ts" />

import * as express  from "express";
import BookRouter from "./BookRouter";
import ArticleRouter from "./ArticleRouter";

export class BaseRouter {
    public static GetBaseRouter() {
        let router = express.Router();
        router.use("/book", BookRouter);
        router.use("/article", ArticleRouter);

        return router;
    }

}
