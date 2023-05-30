import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
const routes: Routes = [{ path: 'home', component: HomeComponent },
{path: 'sidenav', component:SidenavComponent},
{path:'flex' , component:FlexComponent},
{path: 'grid' , component:GridComponent},
{path:'homepage',component:HomepageComponent},
{path:'contactpage',component:ContactpageComponent},

// const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
