import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';


const routes: Routes = [

  { path: '' , component:AppComponent , pathMatch:'full'},
  {path:'create' , component: CreateComponent},
  {path:'view' , component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
