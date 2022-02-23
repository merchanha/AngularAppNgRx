import { createReducer, on } from '@ngrx/store';
import {setFilter} from '../filtro/filtro.actions'

 
export const initialState: string = '' ;
 
const _filterReducer = createReducer(initialState,
  on(setFilter, (state, {filtro}) => filtro  ),
 
);
 
export function filtroReducer(state: any, action: any) {
  return _filterReducer(state, action);
}