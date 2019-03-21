import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';
import { LibraryListComponent } from './library-list/library-list.component';

const routes: Routes = [

	{path: '', redirectTo: "/home", pathMatch: "full"},
	{path: "home", component: HomeComponent},
	{path: "detail/:library", component: LibraryDetailsComponent},
	{path: "list/:search", component: LibraryListComponent}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{}