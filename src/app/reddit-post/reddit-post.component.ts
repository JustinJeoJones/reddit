import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../reddit';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {
  @Input() mypost:Child = {} as Child;
  constructor() { }

  ngOnInit(): void {
  }

}
