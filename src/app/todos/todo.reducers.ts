import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, borrarLista, crear, editar, toggle, toggleAll } from './todo.actions';
 
export const initialState: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Salvar el mundo 2'),
    new Todo('Salvar el mundo 3')



];
 
const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto) ]),
  on(borrarLista, (state) => state.filter(todo => !todo.completado)),

  on (borrar, (state, {id} )=>state.filter( todo => todo.id !== id

  )),

  on(toggleAll, (state, {completado}) => { 
    return state.map( todo =>{
      return {
        ...todo,
      completado: completado

      }
      
    })


  } ), 
  
  on(toggle, (state, {id}) => {
    return state.map(todo => {

      if(todo.id === id)  {
        return{
          ...todo,
          completado: !todo.completado
        }

      }else{
        return todo
      }
     
    })
  }),

  on(editar, (state, {id, texto}) => {
    return state.map(todo => {

      if(todo.id === id)  {
        return{
          ...todo,
          texto: texto
        }

      }else{
        return todo
      }
     
    })
  }),
 
);
 
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}