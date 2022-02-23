import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions'
import * as action from '../../todos/todo.actions'


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string;
  filtros = ['completados', 'pendientes', 'todos'];

  penndientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('filtro')
    // .subscribe(filtro=> this.filtroActual = filtro)

    this.store.subscribe( state =>{
      this.filtroActual = state.filtro;
      this.penndientes = state.todos.filter(todo => !todo.completado).length
    })





  }

  cambiarFiltro(filtro: any){

    this.store.dispatch(actions.setFilter({filtro: filtro}))

  }

  borrar(){

    this.store.dispatch(action.borrarLista())


  }

}
