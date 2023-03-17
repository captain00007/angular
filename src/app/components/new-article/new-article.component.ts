import { Component } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})

export class NewArticleComponent {
  
  constructor(private articleService: ArticleService, private router: Router){}
  
  async submitData(article: Article){
    console.log("Criando");
    await this.articleService.createItem(article).subscribe();
    this.router.navigate(['/articles']);

  }
}
