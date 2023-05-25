import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [{path:'', redirectTo:"login",pathMatch:"full"},
  {path:'login',component: LoginComponentComponent},
  {path:'home',component: HomeComponent,children:[{path:'details/:id',component: DetailoffreComponent},]},
  {path: '**', component: NotFoundComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
