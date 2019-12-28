import { Component, OnInit, Input } from "@angular/core";
import { AppMockServiceService } from "../../../../services/app-mock-service.service";

@Component({
  selector: "app-note-item",
  templateUrl: "./note-item.component.html",
  styleUrls: ["./note-item.component.scss"]
})
export class NoteItemComponent implements OnInit {
  @Input() note;
  showIcon: boolean;
  showText: boolean;
  noteItem = {};
  noteicon = [];
  noteQRcodeicon = {};
  notePreicon = [];

  constructor(private appmockservice: AppMockServiceService) {
    this.showIcon = false;
  }

  ngOnInit() {
    this.noteItem = this.note;
    this.noteicon = this.appmockservice.getIconList();
    this.notePreicon = [...this.noteicon.slice(0, 5)];
  }
  setShow() {
    this.showIcon = true;
  }
  resetShow() {
    this.showIcon = false;
  }
  setTextShow() {
    this.showText = true;
  }
  resetTextShow() {
    this.showText = false;
  }
}
