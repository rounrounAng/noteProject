import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "app-tag-dialog",
  templateUrl: "./tag-dialog.component.html",
  styleUrls: ["./tag-dialog.component.scss"]
})
export class TagDialogComponent implements OnInit {
  constructor(private tagRef: MatDialogRef<TagDialogComponent>) {}

  ngOnInit() {}
  confirm() {
    this.tagRef.close();
  }
}
