import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES_PROVIDER } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2PageScrollModule } from 'ng2-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ClientsComponent,
    ServicesComponent,
    SkillsComponent,
    ContactComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES_PROVIDER,
    AngularFontAwesomeModule,
    Ng2PageScrollModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
