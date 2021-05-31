import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLinkPreviewComponent } from './ng-link-preview.component';

describe('NgLinkPreviewComponent', () => {
  let component: NgLinkPreviewComponent;
  let fixture: ComponentFixture<NgLinkPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLinkPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLinkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
