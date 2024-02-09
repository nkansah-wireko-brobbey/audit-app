import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { EngagementModule } from './pages/engagement-page/engagement.module';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/client',
        pathMatch: 'full',
      },
      
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/client-page/client.module').then(
            (m) => m.ClientModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/contract-page/contract.module').then(
            (m) => m.ContractPageModule
          ),
      },
            {
              path: '',
              loadChildren: () =>
                import('./pages/engagement-page/engagement.module').then(
                  (m) => m.EngagementModule
                ),
            }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
