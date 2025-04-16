import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBoxComponent } from './progress-box.component';

describe('ProgressBoxComponent', () => {
  let component: ProgressBoxComponent;
  let fixture: ComponentFixture<ProgressBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
