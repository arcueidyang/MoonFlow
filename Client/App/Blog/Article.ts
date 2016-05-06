export class Article {
    public Id: string;
    public Author: string;
    public Title: string;
    public Content: string;
    public TimeCreated: Date;
    
    
    constructor(id: string, title: string, content: string) {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.TimeCreated = new Date();
    }
}