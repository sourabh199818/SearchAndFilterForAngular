import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
{path:"search",component:SearchDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
