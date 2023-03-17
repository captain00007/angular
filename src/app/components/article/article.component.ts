import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ActivatedRoute , Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  article?: Article
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void{
    this.getArticle();
  }

  getArticle(): void{
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.articleService.getItem(id).subscribe((article) => (this.article = article));
  }

  async deleteItem(article: Article){
    await this.articleService.removeItem(article.id!).subscribe();
    this.router.navigate(['/articles']);
  }
}
