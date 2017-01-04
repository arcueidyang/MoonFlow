import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "./AuthService";

@Component({
    selector: "auth-body",
    templateUrl: "Client/App/Auth/Auth.html",
    styleUrls: ["Client/App/Styles/Auth.css"],
    providers: [
        AuthService
    ]
})

export class Auth {

}