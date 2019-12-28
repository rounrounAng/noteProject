import { NoteItemComponent } from "./note-item/note-item.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NewnoteComponent } from "./newnote.component";

describe("NewnoteComponent", () => {
  let component: NewnoteComponent;
  let fixture: ComponentFixture<NewnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewnoteComponent, NoteItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
