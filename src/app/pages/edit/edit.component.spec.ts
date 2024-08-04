import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { TodoState } from '../../core/ngrx/todo/todo.reducer';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  const initialState: TodoState = {} as TodoState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditComponent, RouterModule.forRoot([])],
      providers: [provideMockStore({ initialState }),]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
