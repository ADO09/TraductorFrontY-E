import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrCorpusComponent } from './entr-corpus.component';

describe('EntrCorpusComponent', () => {
  let component: EntrCorpusComponent;
  let fixture: ComponentFixture<EntrCorpusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrCorpusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrCorpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
