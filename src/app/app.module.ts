import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { ListDetailsComponent } from './list-details/list-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'list/:index', component: ListDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ListComponent,
    HomeComponent,
    ListDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
