import { Routes } from '@angular/router';
import { EngagementPageComponent } from './engagement-page.component';
import { ViewEngagementDetailsComponent } from './view-engagement-details/view-engagement-details.component';


export const engagementRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'engagement',
          component: EngagementPageComponent,
        },
        {
            path: 'engagement/:engagementId',
            component: ViewEngagementDetailsComponent,
        },
        // {
        //     path:'client/details/:clientId',
        //     component: 
        // }
    
      ],
    },
  ];
  