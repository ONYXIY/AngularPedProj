import { MatButtonModule } from '@angular/material/button';
import {Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Column } from './column.model';
import { Board } from './board.model';





@Component({
  selector: 'users-tasks-view',
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgFor, FormsModule, CdkDropListGroup, MatButtonModule],
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss'],
})
export class TasksViewComponent {

  newBoard = '';

  board: Board = new Board('myBoard', [
    new Column('Ideas',[
    'some Random Idea',
    'qwe',
    'eqwq'
  ]),
  new Column('Reaserch' , [
    'asdsadsad',
    'foooo',
    'newCOlum'
  ]),
  new Column('Todo',[
    'SADASDAS',
    'ASDASD',
    'ASSSSAD'
  ]),
  new Column('Done', [
    'hhhhh',
    'dfhdfhdfh',
    'hfdhdfhdfh'
  ])
])



drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

addBoard() {
  if (this.newBoard) {
    const newColumn = new Column(this.newBoard, []);
    this.board.columns.push(newColumn);
    this.newBoard = ''; 
}
}
}