import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/core/shared/auth/auth.guard';
import { LoginComponent } from '../app/core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'docman',
        loadChildren: 'app/modules/docman/docman.module#DocManModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
