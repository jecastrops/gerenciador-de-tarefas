import { Injectable } from '@angular/core';
import { Tarefa } from './';


@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] { // Retorna um array de tarefas.
    const tarefas = localStorage['tarefas']; // LocalStorage é um array. Pensar pra ele uma chave representando a tarefas.
    // Const = Constantes ou variáveis finais. Variáveis que não serão modificadas.
    return tarefas ? JSON.parse(tarefas) : []; // ? - Operador ternário do if/else.
    // Local Storage armazena apenas string, parse converte o valor de string para formato json.
  }

  cadastrar(tarefa: Tarefa): void { // Recebe uma tarefa com os 3 atributos da classe e não retorna nada.
    const tarefas = this.listarTodos(); // Constante tarefas recebe a lista de tarefas.
    tarefa.id = new Date().getTime(); // id da tarefa receberá a data através do método get.
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
