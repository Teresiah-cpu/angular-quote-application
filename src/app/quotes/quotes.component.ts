import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
// import { Quote } from '@angular/compiler';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, ' At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it','Teresiah', 'Dr Phil', 0,0),
    new Quote(2, 'You are never too old to set another goal or to dream a new dream', 'Janet Wangui', ' Malala Yousafzai', 0,0),
    new Quote(3, 'Spread love everywhere you go', 'Timmo Othiambo', 'Mother Teresa', 0,0)

  ]
  addNewQuote(quotes:any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    // quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
    
  }
  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm("Are you sure you want to delete this Quote?")

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  arr:number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
