import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AddNewClientComponent } from './add-new/add-new-client.component';
import { ViewClientDetailsComponent } from './view-client-details/view-client-details.component';

export const ClientRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'client',
          component: ClientComponent,
        },
        {
            path: 'client/add-new',
            component: AddNewClientComponent,
        },
        {
            path:'client/details/:clientId',
            component: ViewClientDetailsComponent
        }
    
      ],
    },
  ];
  