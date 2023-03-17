import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PaiComponent,
    FilhoComponent,
    ArticlesComponent,
    ArticleComponent,
    NewArticleComponent,
    ArticleFormComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
