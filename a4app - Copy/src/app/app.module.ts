import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './mine/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyloginComponent } from './mine/mylogin/mylogin.component';

const appRoutes = [
    {
      path: '',
      component: UserComponent
    },
    {
      path: 'mylogin',
      component: MyloginComponent
    }
    ];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MyloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
    UserComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
