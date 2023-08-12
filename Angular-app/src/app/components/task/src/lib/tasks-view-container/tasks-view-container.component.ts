import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-tasks-view-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-view-container.component.html',
  styleUrls: ['./tasks-view-container.component.scss'],
})
export class TasksViewContainerComponent {}
