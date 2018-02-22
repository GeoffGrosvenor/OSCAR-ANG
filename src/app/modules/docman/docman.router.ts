import { Routes, RouterModule } from '@angular/router';
import { DocManComponent } from './docman.component';

const DOCMAN_ROUTER: Routes = [
    {
        path: '',
        component: DocManComponent
    }
];

export const DocManRouter = RouterModule.forChild(DOCMAN_ROUTER );
