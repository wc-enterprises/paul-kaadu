import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GridComponent } from './grid/grid.component';
import { FlexComponent } from './flex/flex.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import { ContactpageComponent } from './contactpage/contactpage.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, SidenavComponent, GridComponent, FlexComponent, 
    HomepageComponent, ContactpageComponent],
  imports: [BrowserModule, 
            AppRoutingModule, BrowserAnimationsModule, 
            MatSidenavModule,
            MatListModule,MatIconModule,MatInputModule,MatButtonModule,MatCardModule,
          ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
