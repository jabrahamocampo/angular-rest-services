import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ListComponent } from './Customer/list/list.component';
import { AddComponent } from './Customer/add/add.component';
import { DetailComponent } from './Customer/detail/detail.component';
import { EditComponent } from './Customer/edit/edit.component';



const routes: Routes = [
	{path:'', redirectTo: 'cities', pathMatch: 'full'},
	{path:'cities', component:CitiesComponent}
];

const appRoutes: Routes = [
	{
	 path:'customers',
	 component: ListComponent,
	 data: { title: 'Customer List'}
	},
	{
	 path:'addcustomer',
	 component: AddComponent,
	 data: { title: 'Add Customer'}
	},
	{
	 path:'detailcustomer',
	 component: DetailComponent,
	 data: { title: 'Detail Customer'}
	},	
	{
	 path:'detailcustomer/:id',
	 component: DetailComponent,
	 data: { title: 'Detail Customer'}
	},
	{
	 path:'editcustomer/:id',
	 component: EditComponent,
	 data: { title: 'Edit Customer'}
	}	
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
