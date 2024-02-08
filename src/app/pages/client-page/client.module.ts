import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// import { ExtraRoutes } from './extra.routing';
// import { AppIconsComponent } from './icons/icons.component';
import { ClientComponent } from '../client-page/client.component';
import { ClientRoutes } from './client.routing';
import { AddNewClientComponent } from './add-new/add-new-client.component';
import { ViewClientDetailsComponent } from './view-client-details/view-client-details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
   ClientComponent,
   AddNewClientComponent,
   ViewClientDetailsComponent
  ],
})
export class ClientModule {}
