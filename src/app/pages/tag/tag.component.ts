import { TagDialogComponent } from "./tag-dialog/tag-dialog.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"]
})
export class TagComponent implements OnInit {
  tags = ["test1", "test2"];
  isRemovable = true;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}
  openInput() {
    const tagRef = this.dialog.open(TagDialogComponent, {
      width: "500px"
    });
    tagRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  removeTag(tag) {}
}
