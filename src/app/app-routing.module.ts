import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';

const routes: Routes = [
  {path:"", component: FirstComponentComponent},
  {path: "articles", component: ArticlesComponent},
  {path: "articles/new", component: NewArticleComponent},
  {path: "articles/:id", component: ArticleComponent},
  {path: "articles/:id/edit", component: UpdateArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
