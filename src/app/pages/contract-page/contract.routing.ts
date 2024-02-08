import { Routes } from '@angular/router';
import { ContractPageComponent } from './contract-page.component';
import { ViewComponent } from './view/view.component';
import { ViewSpecificComponent } from './view-specific/view-specific.component';
import { AddNewContractComponent } from './add-new/add-new.component';


export const ContractRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'contract',
          component: ContractPageComponent
        },
        {
            path: 'contract/:contractId',
            component: ViewSpecificComponent
        },
        {
            path: 'contract/:clientId/:contractId',
            component: ViewSpecificComponent
        },
        {
            path:'create/contract',
            component: AddNewContractComponent
        }
    
      ],
    },
  ];
  