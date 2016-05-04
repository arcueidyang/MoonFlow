
import { Component } from "@angular/core";

@Component({
  selector: "AboutInfo",  
  template: "./About.html"  
})

export class AboutInfoComponent {
    public title: string;
    public description: string[];        
    
    constructor() {
        this.InitializePersonalInfo();
    }
    
    private InitializePersonalInfo() {
        this.title = "Yang";
        this.description = [
            "80年代末生人。",
            "少时求学于冀，而后问道于蜀，后赴美帝国主义追求学术和自由。",
            "资本主义的奢侈糜烂没有感受到，却体会到了生活的艰辛。",
            "就职于某不大不小的软件公司。",
            "曾以为遇到这辈子的伴侣，却无奈与佳人失之交臂。",
            "心如死灰之木，身如不系之舟"
        ];
    }
    
    public NavigateToFacebook() {
        window.open("https://www.facebook.com/richard.yang.3910829", "_blank");
    }

    public NavigateToGithub() {
        window.open("https://github.com/arcueidyang", "_blank");
    }
}