import {  ActionReducerMap } from "@ngrx/store";

import { filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducers";

export interface AppState {
    todos: Todo[],
    filtro: string

}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer


}