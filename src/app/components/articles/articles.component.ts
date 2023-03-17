import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent {

  articles: Article[]=[];
  constructor(private articleService: ArticleService){
    
  }

  ngOnInit(): void{
    this.getArticles();
  }

  getArticles(): void{
    this.articleService.getAll().subscribe((articles) => (this.articles = articles));
  }

  deleteItem(article: Article): void{
    this.articles= this.articles.filter(e => e.id !== article.id);
    this.articleService.removeItem(article.id!).subscribe();
  }
  /* {
    "articles":[
        {"id": 1, "title": "Learning Angular", "description":"This article is about angular framework", "owner":"Georges"},
        {"id": 2, "title": "Learning VueJs", "description":"This article is about Vuejs framework","owner":"Captain"},
        {"id": 3, "title": "Learning laravel", "description":"This article is about laravel framework", "owner":"John"},
        {"id": 4, "title": "Learning Bootstrap", "description":"This article is about bootstrap framework", "owner":"Doe"}
    ]
} */
}
