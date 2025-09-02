import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'livros',
  loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
},

{
  path: 'contador',
  loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
},

{
  path: 'estrutura',
  loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)
},
{
  path: 'estoque',
  loadChildren: () => import('./estoque/estoque-module').then(m => m.EstoqueModule)
},
{
  path: 'usuarios',
  loadChildren: () => import('./usuarios/usuarios-module').then(m => m.UsuariosModule)
},
{
  path: 'produtos',
  loadChildren: () => import('./produtos/produtos-module').then(m => m.ProdutosModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

