import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './views/experience/experience.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { EducationComponent } from './views/education/education.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'experience', component: ExperienceComponent, data: { animation: 'isRight' }  },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 'isLeft' } },
  { path: 'education', component: EducationComponent, data: { animation: 'isLeft' }  },
  { path: 'contact', component: ContactComponent, data: { animation: 'isRight' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
