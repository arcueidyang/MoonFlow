import { Directive } from "@angular/core";

declare let tinyMce: any;

@Directive ({
    inputs: ["htmlEditor"],
    selector: "[htmlEditor]"
})

export class EditorDirective {
    constructor() {
        tinyMce.init({
            selector: ".main-text-input",
            schema: "html5"
        });
    } 
}