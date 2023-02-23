import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path:'mywork', component: MyWorkComponent},
  {path:'contact', component: ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
