import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheFicheComponent } from './affiche-fiche.component';

describe('AfficheFicheComponent', () => {
  let component: AfficheFicheComponent;
  let fixture: ComponentFixture<AfficheFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
