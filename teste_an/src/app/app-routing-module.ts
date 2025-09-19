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
},
{
  path: 'dados',
  loadChildren: () => import('./dados/dados-module').then(m => m.DadosModule)
},
{
  path: 'funcionario',
  loadChildren: () => import('./funcionario/funcionario-routing-module').then(m => m.FuncionarioRoutingModule)
},
{
  path: 'revisao',
  loadChildren: () => import('./revisao/revisao-routing-module').then(m => m.RevisaoRoutingModule)
},
{
  path: 'listartarefas',
  loadChildren: () => import('./listar-tarefa/listar-tarefa-module').then(m => m.ListarTarefaModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

