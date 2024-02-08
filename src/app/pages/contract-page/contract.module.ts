import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';


// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { ContractRoutes } from './contract.routing';
import { ContractPageComponent } from './contract-page.component';
import { ViewComponent } from './view/view.component';
import { ViewSpecificComponent } from './view-specific/view-specific.component';
import { AddNewContractComponent } from './add-new/add-new.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContractRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatDatepickerModule
  ],
  declarations: [
    ContractPageComponent,
    ViewComponent,
    ViewSpecificComponent,
    AddNewContractComponent
  ],
})
export class ContractPageModule{}
