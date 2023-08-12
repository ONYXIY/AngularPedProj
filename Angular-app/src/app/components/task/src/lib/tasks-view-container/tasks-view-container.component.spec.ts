import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksViewContainerComponent } from './tasks-view-container.component';

describe('TasksViewContainerComponent', () => {
  let component: TasksViewContainerComponent;
  let fixture: ComponentFixture<TasksViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksViewContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
