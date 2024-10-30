import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaisekiComponent } from './kaiseki.component';

describe('KaisekiComponent', () => {
  let component: KaisekiComponent;
  let fixture: ComponentFixture<KaisekiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaisekiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaisekiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
