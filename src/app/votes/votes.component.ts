import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
