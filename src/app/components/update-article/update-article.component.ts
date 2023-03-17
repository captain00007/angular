import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/Article';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  article!: Article;
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void{
    this.getItem();
  }

  async getItem(){
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    await this.articleService.getItem(id).subscribe((article) => (this.article = article));
  }

  async submitData(article: Article){
    console.log("Atualizando")
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    await this.articleService.updateItem(id,article).subscribe();
    this.router.navigate([`/articles/${id}`]);
  }
}
