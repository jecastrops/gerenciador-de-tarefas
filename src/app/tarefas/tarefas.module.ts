import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
