import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGTFSComponent } from './test-gtfs.component';

describe('TestGTFSComponent', () => {
  let component: TestGTFSComponent;
  let fixture: ComponentFixture<TestGTFSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGTFSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGTFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
