import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { OrdenesComponent } from './Components/ordenes/ordenes.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { SucursalComponent } from './Components/sucursal/sucursal.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

const routes: Routes = [

{
path:'tabla',component:TablaComponent
},
{
path:'formulario',component:FormularioComponent
}
,
{
path:'ordenes',component:OrdenesComponent
  },
  {
path:'producto',component:ProductoComponent
    }
    ,
    {
path:'sucursal',component:SucursalComponent
      }
      ,
      {
path:'usuario',component:UsuarioComponent
              }
      
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 