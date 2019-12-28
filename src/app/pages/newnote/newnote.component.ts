import { AppServiceService } from "./../../../services/app-service.service";
import { Component, OnInit } from "@angular/core";
import { AppMockServiceService } from "./../../../services/app-mock-service.service";
import { Note } from "../../../app/app.module.td";
@Component({
  selector: "app-newnote",
  templateUrl: "./newnote.component.html",
  styleUrls: ["./newnote.component.scss"]
})
export class NewnoteComponent implements OnInit {
  noteData: Note[];
  constructor(private appMockService: AppMockServiceService) {}

  ngOnInit() {
    this.appMockService.getNoteList().subscribe(data => {
      this.noteData = data;
    });
  }
}
