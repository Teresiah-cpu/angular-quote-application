export class Quote {
    id:number;
    quote:string;
    upvotes:number;
    downvotes:number;
    name:string;
    author:string;
    date:Date
    constructor(id:number, quote:string,name:string,author:string, upvotes:number,downvotes:number,date:Date){
        this.id=id;
        this.quote=quote;
        this.name=name;
        this.author=author;
        this.upvotes=upvotes;
        this.downvotes=downvotes;
        this.date=date

    }
}
