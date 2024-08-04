import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './new.component';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { TodoState } from '../../core/ngrx/todo/todo.reducer';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  const initialState: TodoState = {} as TodoState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponent, RouterModule.forRoot([])],
      providers: [provideMockStore({ initialState }),]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
