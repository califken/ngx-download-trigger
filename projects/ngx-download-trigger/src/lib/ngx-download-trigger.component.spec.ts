import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDownloadTriggerComponent } from './ngx-download-trigger.component';

describe('NgxDownloadTriggerComponent', () => {
  let component: NgxDownloadTriggerComponent;
  let fixture: ComponentFixture<NgxDownloadTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDownloadTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDownloadTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
