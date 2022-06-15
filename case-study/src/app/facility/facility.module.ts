import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityComponent} from "./facility-list/facility.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FacilityComponent,
    FacilityCreateComponent,
    FacilityEditComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
