import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionListComponent} from "./land_transaction/transaction-list/transaction-list.component";
import {TransactionCreateComponent} from "./land_transaction/transaction-create/transaction-create.component";


const routes: Routes = [
  {path: 'transaction-list', component:TransactionListComponent},
  {path: 'transaction-create', component:TransactionCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
