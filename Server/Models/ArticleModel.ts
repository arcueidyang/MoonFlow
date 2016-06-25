/// <reference path="../../typings/mongoose/mongoose.d.ts" />

import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

let articleModel = new Schema({
    title: String,
    body: String,
    author: String,
    creationTime: String,
    lastEditTime: String,
    genre: String
});

export = mongoose.model("Article", articleModel);
