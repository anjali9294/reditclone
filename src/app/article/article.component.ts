import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;
  constructor() {
    console.log(this.article);
    console.log(this.article);
  }
  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }
  ngOnInit() {}
}
