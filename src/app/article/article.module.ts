import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModifierArticleComponent } from './modifier-article/modifier-article.component';


@NgModule({
  declarations: [AjoutArticleComponent, ListeArticleComponent,  ModifierArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ArticleModule { }
