import { Component, OnInit } from '@angular/core';
// import { Quote } from '@angular/compiler';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, '','First Quote', '', 1,0),
    new Quote(2, '', 'Second Quote', '', 0,0),
    new Quote(3, '', 'Third Quote', '', 0,0)

  ]
  addNewQuote(quotes:any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    // quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
    
  }
  arr:number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
