import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVoitureComponent } from './liste-voiture.component';

describe('ListeVoitureComponent', () => {
  let component: ListeVoitureComponent;
  let fixture: ComponentFixture<ListeVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeVoitureComponent]
    });
    fixture = TestBed.createComponent(ListeVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
