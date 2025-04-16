import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMusicBoxComponent } from './image-music-box.component';

describe('ImageMusicBoxComponent', () => {
  let component: ImageMusicBoxComponent;
  let fixture: ComponentFixture<ImageMusicBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageMusicBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageMusicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
