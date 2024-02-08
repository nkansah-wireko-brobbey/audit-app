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
import { EngagementPageComponent } from './engagement-page.component';
import { engagementRoutes } from './engagement.routing';
import { ViewEngagementDetailsComponent } from './view-engagement-details/view-engagement-details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(engagementRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
  EngagementPageComponent,
  ViewEngagementDetailsComponent
  ],
})
export class EngagementModule {}
