import { createAction, props } from "@ngrx/store";



export const setFilter = createAction('[Filtro] Set Filtro',
props<{ filtro: string }>()    
);