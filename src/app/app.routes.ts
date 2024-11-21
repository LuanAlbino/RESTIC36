import { Pagina5Component } from './views/pagina5/pagina5.component';
import { Routes } from '@angular/router';
import { ContainerImgComponent } from './views/container-img/container-img.component';
import { Pagina2Component } from './views/pagina2/pagina2.component';
import { Pagina3Component } from './views/pagina3/pagina3.component';
import { Pagina4Component } from './views/pagina4/pagina4.component';

export const routes: Routes = [
    {path:'',
    component: ContainerImgComponent
    },
    { path:'categorias',
        component: Pagina2Component},
        { path: 'produtos',
            component:Pagina3Component
        },
        {
            path: 'detalhes',
            component:Pagina4Component
        } ,
        { path:'formulario',
            component:Pagina5Component

        }
]
