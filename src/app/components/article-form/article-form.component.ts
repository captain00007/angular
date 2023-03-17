import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/Article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
  @Output() submit = new EventEmitter<Article>()
  @Input() article?: Article;
  articleForm! : FormGroup;

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      id: new FormControl(this.article ? this.article.id: ""),
      title: new FormControl(this.article ? this.article.title: "", [Validators.required]),
      description: new FormControl(this.article ? this.article.description: "", [Validators.required]),
      owner: new FormControl(this.article ? this.article.owner: "", [Validators.required])
    });
  }

  get title(){
    return this.articleForm.get("title")!;
  }

  get description(){
    return this.articleForm.get("description")!;
  }

  get owner(){
    return this.articleForm.get("owner")!;
  }

  onSubmit(): void{
    if (!this.articleForm.invalid){
      console.log("Form Valid")
      this.submit.emit(this.articleForm.value);
    }
  }
}
