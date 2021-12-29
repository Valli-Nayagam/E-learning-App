import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { JavascriptComponent } from './codinglanguage/javascript/javascript.component';
import { CssComponent } from './codinglanguage/css/css.component';
import { HomeComponent } from './html-tutorial/home/home.component';
import { IntroductionComponent } from './html-tutorial/introduction/introduction.component';
import { HtmleditorsComponent } from './html-tutorial/htmleditors/htmleditors.component';
import { HtmlbasicComponent } from './html-tutorial/htmlbasic/htmlbasic.component';
import { HtmlheadingComponent } from './html-tutorial/htmlheading/htmlheading.component';
import { HtmlparagraphComponent } from './html-tutorial/htmlparagraph/htmlparagraph.component';
import { HtmlimageComponent } from './html-tutorial/htmlimage/htmlimage.component';
import { HtmltablesComponent } from './html-tutorial/htmltables/htmltables.component';
import { HtmllistsComponent } from './html-tutorial/htmllists/htmllists.component';
import { HtmlclasesComponent } from './html-tutorial/htmlclases/htmlclases.component';
import { HtmllinksComponent } from './html-tutorial/htmllinks/htmllinks.component';
import { HtmlformsComponent } from './html-tutorial/htmlforms/htmlforms.component';
import { HtmlstylesComponent } from './html-tutorial/htmlstyles/htmlstyles.component';
import { HtmlformattingComponent } from './html-tutorial/htmlformatting/htmlformatting.component';
import { HtmlquizComponent } from './html-tutorial/htmlquiz/htmlquiz.component';
import { LearnPipe } from './learn.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,
    MainpageComponent,
    CssComponent,
    JavascriptComponent,
    HomeComponent,
    IntroductionComponent,
    HtmleditorsComponent,
    HtmlbasicComponent,
    HtmlheadingComponent,
    HtmlparagraphComponent,
    HtmlimageComponent,
    HtmltablesComponent,
    HtmllistsComponent,
    HtmlclasesComponent,
    HtmllinksComponent,
    HtmlformsComponent,
    HtmlstylesComponent,
    HtmlformattingComponent,
    HtmlquizComponent,
    LearnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
