import { Component, OnInit } from "@angular/core";
import SimpleMDE from "simplemde";
import "simplemde/debug/simplemde.css";
import "simplemde/debug/simplemde.js";
import { fa } from "fontawesome";
@Component({
  selector: "app-note-create",
  templateUrl: "./note-create.component.html",
  styleUrls: ["./note-create.component.scss"]
})
export class NoteCreateComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      const simplemde = new SimpleMDE({
        element: document.getElementById("fieldTest"),
        autoDownloadFontAwesome: true,
        status: false
      });
    });
  }

  ngOnInit() {}
}
