import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';





const routes: Routes = [
  {path:'ajout',component:AjoutArticleComponent},
  {path:'liste',component:ListeArticleComponent},
{path:'edit/:id',component:ModifierArticleComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
