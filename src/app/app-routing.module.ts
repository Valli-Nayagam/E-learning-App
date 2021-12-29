import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './codinglanguage/css/css.component';
import { JavascriptComponent } from './codinglanguage/javascript/javascript.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './html-tutorial/home/home.component';
import { HtmlbasicComponent } from './html-tutorial/htmlbasic/htmlbasic.component';
import { HtmlclasesComponent } from './html-tutorial/htmlclases/htmlclases.component';
import { HtmleditorsComponent } from './html-tutorial/htmleditors/htmleditors.component';
import { HtmlformattingComponent } from './html-tutorial/htmlformatting/htmlformatting.component';
import { HtmlformsComponent } from './html-tutorial/htmlforms/htmlforms.component';
import { HtmlheadingComponent } from './html-tutorial/htmlheading/htmlheading.component';
import { HtmlimageComponent } from './html-tutorial/htmlimage/htmlimage.component';
import { HtmllinksComponent } from './html-tutorial/htmllinks/htmllinks.component';
import { HtmllistsComponent } from './html-tutorial/htmllists/htmllists.component';
import { HtmlparagraphComponent } from './html-tutorial/htmlparagraph/htmlparagraph.component';
import { HtmlquizComponent } from './html-tutorial/htmlquiz/htmlquiz.component';
import { HtmlstylesComponent } from './html-tutorial/htmlstyles/htmlstyles.component';
import { HtmltablesComponent } from './html-tutorial/htmltables/htmltables.component';
import { IntroductionComponent } from './html-tutorial/introduction/introduction.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'htmlhome', component: HomeComponent },
  { path: 'htmlintroduction', component: IntroductionComponent },
  { path: 'htmlbasic', component: HtmlbasicComponent },
  { path: 'htmlclases', component: HtmlclasesComponent },
  { path: 'htmleditors', component: HtmleditorsComponent },
  { path: 'htmlformatting', component: HtmlformattingComponent },
  { path: 'htmlforms', component: HtmlformsComponent },
  { path: 'htmlheading', component: HtmlheadingComponent },
  { path: 'htmlimage', component: HtmlimageComponent },
  { path: 'htmllinks', component: HtmllinksComponent },
  { path: 'htmllists', component: HtmllistsComponent },
  { path: 'htmlparagraph', component: HtmlparagraphComponent },
  { path: 'htmlquiz', component: HtmlquizComponent },
  { path: 'htmlstyles', component: HtmlstylesComponent },
  { path: 'htmltables', component: HtmltablesComponent },
  { path: 'css', component: CssComponent },
  { path: 'javascript', component: JavascriptComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
