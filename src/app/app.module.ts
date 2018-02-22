import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';



import { OSCMaterialModule } from '../app/core/shared/material/material.module';
import { AlertComponent } from '../app/core/shared/alert/alert.component';
import { AuthGuard } from '../app/core/shared/auth/auth.guard';
import { AlertService } from '../app/core/shared/alert/alert.service';
import { AuthenticationService } from '../app/core/shared/auth/auth.service';
import { UserService } from '../app/core/shared/user/user.service';

// import { NavigationComponent } from './components/navigation/navigation.component';
// import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from '../app/core/components/login/login.component';
import { RegisterComponent } from '../app/core/components/register/register.component';

import { AppComponent } from './app.component';

import { appRouter } from './app.router';


@NgModule({
  declarations: [
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    // NavigationComponent,
    // MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OSCMaterialModule,
    appRouter
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
   //  fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
