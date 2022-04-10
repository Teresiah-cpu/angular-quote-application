import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  upvotes:number=0
  upVotesClick(){
    this.upvotes ++;
  }
  downvotes:number=0

  downVotesClick(){
    this.downvotes ++;
  }
    @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
