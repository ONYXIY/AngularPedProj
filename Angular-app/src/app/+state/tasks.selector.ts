// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { ITaskColum } from '../model/task.interface';

import { createSelector } from "@ngrx/store";
import { ITaskColum } from "../model/task.interface";

// export const selectTaskState = createFeatureSelector<ITaskColum>('tasks');

// export const selectColumn = createSelector(
//   selectTaskState,
//   (state: ITaskColum) => state.column
// );


export const selectTaskState = (state: ITaskColum) => state.column;

export const columnTaskSelector = createSelector(
  selectTaskState,
  (state) => state.columnName
)