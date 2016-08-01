import { Directive } from "@angular/core";

declare let tinymce: any;

@Directive ({
    inputs: ["htmlEditor"],
    selector: "[htmlEditor]"
})

export class EditorDirective {
    constructor() {
        tinymce.init({
            selector: "textarea",
            schema: "html5"
        });
    } 
}