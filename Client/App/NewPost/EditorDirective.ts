import { Directive } from "@angular/core";

declare let tinymce: any;

@Directive ({
    selector: "[htmlEditor]"
})

export class EditorDirective {
    constructor() {
        tinymce.init({
            selector: "#main-text-area",
            schema: "html5"
        });
    } 
}